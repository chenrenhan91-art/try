import type { Metadata } from "next";
import { Archivo, Questrial } from "next/font/google";
import { LegacyBasePathRedirect } from "@/components/store/LegacyBasePathRedirect";
import { CartProvider } from "@/context/CartProvider";
import { company } from "@/lib/company";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fengzhiyionline.com"),
  title: {
    default: `${company.productName} - Heat & Compression Relief`,
    template: `%s - ${company.productName}`,
  },
  description:
    "Relieve tired hands with heat and air compression. Cordless 15-minute sessions, 90-day guarantee, free US shipping.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${questrial.variable} h-full antialiased`}>
      <body className="min-h-full bg-page text-navy">
        <LegacyBasePathRedirect />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
