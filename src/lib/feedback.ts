/** Feedback validation shared by the browser and the server route. */
export const FEEDBACK_LIMITS = { message: 2000, name: 100, contact: 120, displayName: 40 } as const;
export const FEEDBACK_SERVICES = ['detection', 'hidden', 'underground', 'repair', 'pipeRepair', 'other'] as const;
export type FeedbackService = (typeof FEEDBACK_SERVICES)[number];

export interface Feedback {
  rating: number;
  message: string;
  service: FeedbackService | '';
  name: string;
  contact: string;
  publish: boolean;
  /** 'name' to publish under displayName, 'anonymous' otherwise. Only used when publish is true. */
  display: 'name' | 'anonymous';
  displayName: string;
}
export type FeedbackError = 'rating' | 'message' | 'contact' | 'displayName' | 'tooLong';
export type FeedbackErrors = Partial<Record<keyof Feedback, FeedbackError>>;

const clean = (v: unknown) =>
  String(v ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim();

export function validateFeedback(raw: Record<string, unknown>): { data: Feedback; errors: FeedbackErrors } {
  const publish = ['on', 'true', '1', 'yes'].includes(clean(raw.publish).toLowerCase());
  const data: Feedback = {
    rating: Number(clean(raw.rating)),
    message: clean(raw.message),
    service: (FEEDBACK_SERVICES as readonly string[]).includes(clean(raw.service)) ? (clean(raw.service) as FeedbackService) : '',
    name: clean(raw.name),
    contact: clean(raw.contact),
    publish,
    display: clean(raw.display) === 'name' ? 'name' : 'anonymous',
    displayName: clean(raw.displayName),
  };
  const errors: FeedbackErrors = {};
  if (!Number.isInteger(data.rating) || data.rating < 1 || data.rating > 5) errors.rating = 'rating';
  if (data.message.length < 5) errors.message = 'message';
  else if (data.message.length > FEEDBACK_LIMITS.message) errors.message = 'tooLong';
  if (data.name.length > FEEDBACK_LIMITS.name) errors.name = 'tooLong';
  if (data.contact) {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact);
    const digits = data.contact.replace(/\D/g, '');
    const isPhone = /^\+?[\d\s\-()]+$/.test(data.contact) && digits.length >= 9 && digits.length <= 15;
    if (data.contact.length > FEEDBACK_LIMITS.contact) errors.contact = 'tooLong';
    else if (!isEmail && !isPhone) errors.contact = 'contact';
  }
  if (publish && data.display === 'name') {
    if (data.displayName.length < 2) errors.displayName = 'displayName';
    else if (data.displayName.length > FEEDBACK_LIMITS.displayName) errors.displayName = 'tooLong';
  }
  return { data, errors };
}
