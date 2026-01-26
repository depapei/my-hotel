import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
  display: "swap", // Use 'swap' to minimize layout shift
  variable: "--font-poppins", // Optional: assign a CSS variable
});

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "Mau booking hotel? Disini aja!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
