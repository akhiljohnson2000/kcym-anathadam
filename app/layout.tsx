import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  ),
  title: "KCYM Anathadam",
  description:
    "KCYM Anathadam — Faith, Fellowship, Service. Kerala Catholic Youth Movement at St. Thomas Church, Anathadam.",
  openGraph: {
    title: "KCYM Anathadam",
    description:
      "KCYM Anathadam — Faith, Fellowship, Service. Kerala Catholic Youth Movement at St. Thomas Church, Anathadam.",
    type: "website",
    images: ["/meta_logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KCYM Anathadam",
    description: "KCYM Anathadam — Faith, Fellowship, Service.",
    images: ["/meta_logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Layout>{children}</Layout>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
