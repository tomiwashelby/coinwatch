import type { Metadata } from "next";
import { Geist_Mono, Raleway, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistMono = Geist_Mono({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoinWatch",
  description: "Keep tabs on your crypto bags.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        <Header/>
        {children}
      </body>
    </html>
  );
}
