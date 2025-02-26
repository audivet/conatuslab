import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from './components/AppLayout'; // Adjust path as needed

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConatusLab",
  description: "A transformative learning platform for legal-to-tech career transitions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}