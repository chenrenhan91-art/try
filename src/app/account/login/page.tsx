import type { Metadata } from "next";
import { LoginForm } from "@/components/account/LoginForm";
import { StoreShell } from "@/components/store/StoreShell";

export const metadata: Metadata = { title: "Account" };

export default function LoginPage() {
  return (
    <StoreShell>
      <section className="mx-auto max-w-md px-5 py-16">
        <h1 className="mb-6 text-4xl">Log in</h1>
        <LoginForm />
      </section>
    </StoreShell>
  );
}
