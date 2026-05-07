import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import { Signature } from "@/components/ui/signature";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Dr. Roni Gershonovitch WebPage",
  description:
    "DMD, MPH. Clinical advisor and AI enabler building evidence-based decision-support tools at the intersection of dental medicine and machine intelligence.",
  keywords: [
    "Clinical AI",
    "Dental AI",
    "Clinical Decision Support",
    "Dental Medicine",
    "Claude API",
    "Healthcare Software",
    "Roni Gershonovitch",
    "DMD",
    "MPH",
  ],
  authors: [{ name: "Dr. Roni Gershonovitch" }],
  openGraph: {
    title: "Dr. Roni Gershonovitch WebPage",
    description:
      "Clinical advisor and AI enabler. Evidence-based decision-support tools for medicine.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Roni Gershonovitch WebPage",
    description:
      "Clinical advisor and AI enabler. Evidence-based decision-support tools for medicine.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col" id="top">
        {children}
        <Signature />
      </body>
    </html>
  );
}
