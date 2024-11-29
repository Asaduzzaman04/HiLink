import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from '../components/Navbar';

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hilink",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} ${poppinsFont.variable} antialiased`}
      >
        {/* navbar */}
        <Navbar/>
        <main className="overflow-hidden relative">{children}</main>
      </body>
    </html>
  );
}
