import { company } from "@/lib/company";

export function openStoreMail(subject: string, body: string) {
  const url = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}
