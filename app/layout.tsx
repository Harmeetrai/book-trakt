import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookTrakt",
  description: "Book Tracking App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="bookTrakt-theme"
        >
          {children}
        </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}