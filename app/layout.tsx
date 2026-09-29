import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";

export const metadata: Metadata = {
  title: {
    default: "Modus | Intelligent Business Operating System for Nigeria",
    template: "%s | Modus Business OS",
  },
  description:
    "Modus (modus.ng) is Nigeria's intelligent business operating system. Register your business, automate CAC & FIRS compliance, manage corporate documents in your Vault, and generate verifiable 3D Business Passport cards.",
  keywords: [
    "Modus",
    "modus.ng",
    "app.modus.ng",
    "partners.modus.ng",
    "admin.modus.ng",
    "CAC Nigeria Business Registration",
    "FIRS Tax Identification Number",
    "Nigerian Business Passport",
    "Business Operating System Nigeria",
    "SCUML PenCom ITF Filings",
  ],
  authors: [{ name: "Modus Technologies Ltd", url: "https://modus.ng" }],
  creator: "Modus Technologies Ltd",
  publisher: "Modus Business OS",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://modus.ng"),
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Modus | Intelligent Business Operating System for Nigeria",
    description:
      "One platform to register, stay 100% compliant, generate live invoices, print professional credentials, and connect with accredited legal & accounting partners.",
    url: "https://modus.ng",
    siteName: "Modus Business OS",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://modus.ng/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modus Intelligent Business Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modus Business OS",
    description: "Nigeria's Intelligent Business Operating System & Verifiable Passport.",
    creator: "@modus_ng",
    images: ["https://modus.ng/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#059669",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Modus Business Operating System",
    operatingSystem: "Web-based Platform",
    applicationCategory: "BusinessApplication",
    url: "https://modus.ng",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NGN",
    },
    publisher: {
      "@type": "Organization",
      name: "Modus Technologies Ltd",
      url: "https://modus.ng",
      logo: "https://modus.ng/logo.png",
      sameAs: [
        "https://app.modus.ng",
        "https://partners.modus.ng",
        "https://admin.modus.ng",
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-emerald-200 selection:text-emerald-900">
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
