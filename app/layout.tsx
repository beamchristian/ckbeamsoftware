import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Recoleta-Black.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Recoleta-Medium.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Recoleta-Light.ttf",
      weight: "200",
    },
  ],
  variable: "--font-Recoleta-Black",
});

export const metadata: Metadata = {
  title: "Home | CKBEAM-SOFTWARE",
  description:
    "Welcome to CKBEAM SOFTWARE, a personal portfolio website for Christian Beam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.className}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
