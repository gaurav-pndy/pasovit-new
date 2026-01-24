import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Pasovit Technologies",
  description: "Custom-built websites that are beautiful, fast, and scalable.",
  keywords: ["web development, React, Pasovit, software, UI/UX"],
  url: "https://pasovit.com/",
  alternates: {
    canonical: "https://pasovit.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased`}>
        <Header />
        <main className={""}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
