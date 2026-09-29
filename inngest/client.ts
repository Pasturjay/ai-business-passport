import { Inngest } from "inngest";

/**
 * Inngest client for Modus Business Operating System.
 * Orchestrates all asynchronous work: OCR, doc generation, reminders, and sync jobs.
 */
export const inngest = new Inngest({
  id: "modus-business-operating-system",
  eventKey: process.env.INNGEST_EVENT_KEY,
});
