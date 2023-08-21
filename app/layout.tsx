import "./globals.css";
import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";

const inter = Luckiest_Guy({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Iconic",
  description:
    "Decode the message behind the emojis and unravel the words in this thrilling emoji guessing game!",
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
