import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recovery in Love",
  description: "Dating built around recovery, self-awareness, and relationship compatibility.",
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
