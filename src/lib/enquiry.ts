/** Validation shared by the browser and the server route. */
export const LIMITS = { name: 100, phone: 25, district: 100, message: 2000 } as const;
export const SERVICES = ['detection', 'repair', 'unsure'] as const;
export type Service = (typeof SERVICES)[number];

export interface Enquiry {
  name: string;
  phone: string;
  district: string;
  service: Service;
  message: string;
}
export type FieldError = 'name' | 'phone' | 'district' | 'service' | 'message' | 'tooLong';
export type Errors = Partial<Record<keyof Enquiry, FieldError>>;

const clean = (v: unknown) =>
  String(v ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim();

export function validateEnquiry(raw: Record<string, unknown>): { data: Enquiry; errors: Errors } {
  const data = {
    name: clean(raw.name),
    phone: clean(raw.phone),
    district: clean(raw.district),
    service: clean(raw.service) as Service,
    message: clean(raw.message),
  };
  const errors: Errors = {};
  if (data.name.length < 2) errors.name = 'name';
  else if (data.name.length > LIMITS.name) errors.name = 'tooLong';

  // International-friendly: optional leading +, digits, spaces, dashes, brackets; 9–15 digits.
  const phoneDigits = data.phone.replace(/\D/g, '');
  if (!/^\+?[\d\s\-()]+$/.test(data.phone) || phoneDigits.length < 9 || phoneDigits.length > 15) errors.phone = 'phone';

  if (data.district.length < 2) errors.district = 'district';
  else if (data.district.length > LIMITS.district) errors.district = 'tooLong';

  if (!SERVICES.includes(data.service)) errors.service = 'service';

  if (data.message.length < 10) errors.message = 'message';
  else if (data.message.length > LIMITS.message) errors.message = 'tooLong';

  return { data, errors };
}
