import type { Metadata } from "next";
import "./ui/globals.css";
import { spaceMono } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Davide Gattini's site",
  description: "Davide Gattini's Personal site for getting information about Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className}`}>{children}</body>
    </html>
  );
}
