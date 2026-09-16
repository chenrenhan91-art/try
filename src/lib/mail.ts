import { company } from "@/lib/company";

export function mailtoInboxHref(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${company.inboxEmail}${query ? `?${query}` : ""}`;
}

export function openStoreMail(subject: string, body: string) {
  window.location.href = mailtoInboxHref(subject, body);
}
