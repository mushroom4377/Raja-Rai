import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Meta Ads Expert | Get Consistent Sales Without Wasting Money",
  description:
    "Meta Ads expert helping businesses generate consistent leads and sales with a proven system. Stop wasting money on ads and start scaling.",
  openGraph: {
    title: "Meta Ads Expert | Get Consistent Sales Without Wasting Money",
    description:
      "Meta Ads expert helping businesses generate consistent leads and sales with a proven system. Stop wasting money on ads and start scaling.",
    type: "website",
    url: "https://example.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Meta Ads Expert website preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Expert | Get Consistent Sales Without Wasting Money",
    description:
      "Meta Ads expert helping businesses generate consistent leads and sales with a proven system. Stop wasting money on ads and start scaling.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
