import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

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

const monloLocal = localFont({
  src: [
    {
      path: "../public/fonts/menlo-regular-webfont.woff2", // Adjust path relative to this file
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap", // Optional: control how the font is displayed while loading
  variable: "--font-menlo-local", // Define a CSS variable
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
    <html
      lang='en'
      suppressHydrationWarning
      className={`${monloLocal.variable}`}
    >
      <body className={poppins.className}>
        {" "}
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
