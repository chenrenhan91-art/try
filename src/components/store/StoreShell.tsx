import { AnnouncementBar } from "@/components/store/AnnouncementBar";
import { Header } from "@/components/store/Header";
import { Footer } from "@/components/store/Footer";
import { CartDrawer } from "@/components/store/CartDrawer";

export function StoreShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
