import Link from "next/link";
import { company } from "@/lib/company";
import { NewsletterForm } from "@/components/store/NewsletterForm";
import { productPath } from "@/lib/product";

const shopLinks = [
  { href: "/collections/all", label: "Shop all products" },
  { href: productPath(), label: "Shop Hand Massager" },
  { href: "/pages/our-story", label: "Our Story" },
  { href: "/pages/contact", label: "Help" },
  { href: "/policies/privacy-policy", label: "Privacy Policy" },
  { href: "/policies/terms-of-service", label: "Terms of Service" },
];

const policyLinks = [
  { href: "/policies/privacy-policy", label: "Privacy policy" },
  { href: "/policies/terms-of-service", label: "Terms of service" },
  { href: "/policies/refund-policy", label: "Refund policy" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="page-width grid gap-10 py-11 md:grid-cols-2 lg:grid-cols-4 lg:pb-[60px] lg:pt-11">
        <div>
          <h2 className="mb-4 text-lg">{company.productName}</h2>
          <ul className="space-y-3 text-[15px] text-white/80">
            {shopLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg">Contact</h2>
          <p className="text-[15px] leading-relaxed text-white/80">
            {company.legalName}
            <br />
            {company.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
            <a className="mt-3 inline-block text-white hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-lg">Help</h2>
          <ul className="space-y-3 text-[15px] text-white/80">
            <li>
              <Link href="/pages/contact" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/pages/reviews" className="hover:text-white">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-lg">Email updates</h2>
          <p className="mb-4 text-[15px] text-white/80">Restocks, shipping notes, and offer emails.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="page-width flex flex-col gap-3 py-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()}, {company.legalName}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
