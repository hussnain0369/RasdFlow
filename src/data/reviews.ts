/**
 * APPROVED CUSTOMER REVIEWS — edited by the site owner.
 *
 * How to publish a review:
 *  1. Feedback arrives by email from the website's feedback form.
 *  2. Publish it ONLY if the email says "Permission to publish: YES" and you approve it.
 *  3. Copy the rating and the customer's own words below. Do not edit their meaning.
 *     Use the display name exactly as shown in the email ("Anonymous" -> author: null).
 *  4. NEVER copy the customer's phone number or email into this file.
 *  5. Commit the change; the site rebuilds and shows the three newest reviews.
 *
 * Never add sample, invented or edited reviews. Remove a review if the customer asks.
 */

export type ReviewService = 'detection' | 'hidden' | 'underground' | 'repair' | 'pipeRepair';

export interface ApprovedReview {
  /** Date the feedback was received, YYYY-MM-DD. Used to show the newest first. */
  date: string;
  /** 1 to 5, as the customer chose. */
  rating: 1 | 2 | 3 | 4 | 5;
  /** The display name the customer chose, or null to publish anonymously. */
  author: string | null;
  /** The review in the language the customer wrote it. Leave the other language out. */
  text: { en?: string; ar?: string };
  /** Only if the customer named the service, or it is confirmed from the job. */
  service?: ReviewService;
}

export const approvedReviews: ApprovedReview[] = [];

/**
 * Average rating and count shown with the reviews, ONLY when they come from a
 * real, named source the customer can check (e.g. the Google Business Profile),
 * copied with the date you read them. null = nothing shown.
 */
export const reviewSummary: { average: number; count: number; source: string; url: string; asOf: string } | null = null;
