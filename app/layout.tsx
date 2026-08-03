import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Free AI Marketing Consultation for Dental Clinics | AI Marketing Raja",
  description: "Get a free one-to-one AI marketing consultation and a customized marketing plan for your dental clinic.",
  openGraph: { title: "Free AI Marketing Consultation for Dental Clinics", description: "Discover practical strategies to attract more qualified dental patients.", type: "website", images: [{ url: "/ai-marketing-raja-teal.png", alt: "AI Marketing Raja" }] },
  twitter: { card: "summary_large_image", title: "Free AI Marketing Consultation for Dental Clinics", description: "Get a customized marketing plan for your dental clinic.", images: ["/ai-marketing-raja-teal.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
