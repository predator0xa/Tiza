import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "TIZA",
  description: "Luxury Retail & Wholesale Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cormorant.variable}`}>
        <ClerkProvider><CartProvider>
          <WishlistProvider>
            {children}
            <Footer />
          </WishlistProvider>
        </CartProvider></ClerkProvider>
      </body>
    </html>
  );
}
