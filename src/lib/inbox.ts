import { company } from "@/lib/company";

export type InboxResult =
  | { ok: true }
  | { ok: false; needsActivation: boolean; message: string };

export async function sendToStoreInbox(fields: Record<string, string>): Promise<InboxResult> {
  const response = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _template: "table",
      _captcha: "false",
      ...fields,
    }),
  });

  const data = (await response.json().catch(() => null)) as
    | { success?: boolean | string; message?: string }
    | null;

  const success = data?.success === true || data?.success === "true";
  const message = data?.message || "";
  const needsActivation = /confirm|activat|inbox/i.test(message);

  if (success) return { ok: true };

  return {
    ok: false,
    needsActivation,
    message: message || "The message could not be delivered.",
  };
}
