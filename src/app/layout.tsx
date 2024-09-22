import type { Metadata } from "next";
import "./globals.css";
import Search from "@/components/ui/dashboard-page/search";
import LeftMenu from "@/components/ui/dashboard-page/leftMenu";
import MobileTabs from "@/components/ui/dashboard-page/mobile-tabs";
import FooterNav from "@/components/ui/dashboard-page/footer-nav";

export const metadata: Metadata = {
  title: "Panel",
  description: "admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 relative">
        <Search />
        <MobileTabs />
        <div className="flex max-sm:justify-center w-full md:h-[calc(100vh-55px)] mt-2">
          <LeftMenu />
          {children}
        </div>
        <FooterNav />
      </body>
    </html>
  );
}
