import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code & Promote",
  description: "Design | Development | Marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
