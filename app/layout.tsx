import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rumah Dijual Wisteria",
  description:
    "Temukan rumah impian Anda di Wisteria – hunian modern dengan fasilitas lengkap dan lokasi strategis di pusat kota.",
  keywords: [
    "rumah dijual",
    "rumah Wisteria",
    "properti",
    "perumahan baru",
    "cluster Wisteria",
    "rumah strategis",
    "hunian nyaman",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
