import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "KCYM Anathadam",
  description:
    "KCYM Anathadam — Faith, Fellowship, Service. Kerala Catholic Youth Movement at St. Thomas Church, Anathadam.",
  openGraph: {
    title: "KCYM Anathadam",
    description:
      "KCYM Anathadam — Faith, Fellowship, Service. Kerala Catholic Youth Movement at St. Thomas Church, Anathadam.",
    type: "website",
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
