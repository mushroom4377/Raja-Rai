import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Free 1:1 Digital Marketing Consultation Call",
  description:
    "Book a free 1:1 consultation call and get a simple digital marketing growth plan for your business.",
  openGraph: {
    title: "Get a Free 1:1 Digital Marketing Consultation Call",
    description:
      "Discover what's stopping your business from getting consistent customers online.",
    type: "website",
    images: [
      {
        url: "/main-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "Digital marketing consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 1:1 Digital Marketing Consultation Call",
    description:
      "Get a simple growth plan made for your business.",
    images: ["/main-logo-transparent.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '992006266646125');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=992006266646125&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
