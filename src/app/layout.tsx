import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le jugement de Compostius",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased h-screen w-screen ${cinzel.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
