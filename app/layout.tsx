import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Free 1:1 Digital Marketing Consultation",
  description:
    "Get a customized marketing strategy to help your business get customers using Facebook and Instagram ads.",
  openGraph: {
    title: "Get 20-50 Customers Every Week Using Facebook & Instagram Ads",
    description:
      "Book a free 1:1 consultation and get a customized marketing strategy for your business.",
    type: "website",
    images: [
      {
        url: "/main-logo-final-cropped.png",
        width: 1200,
        height: 630,
        alt: "Digital marketing consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 1:1 Digital Marketing Consultation",
    description:
      "Get a simple, clear plan that actually brings customers.",
    images: ["/main-logo-final-cropped.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
