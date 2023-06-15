import "./globals.css";
import { Sora } from "@next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToasterProvider } from "@/components/ToasterProvider";
import Providers from "@/components/Provider";

export const metadata = {
  title: "Dine Market",
  description:
    "Dine Market delivers innovative products, experiences and services to inspire athletes.",
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable}`}>
      <body className={`min-h-screen flex flex-col font-sora`}>
        <ToasterProvider />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
