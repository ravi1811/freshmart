import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/layout/Footer";
import ShoppingAssistant from "@/components/assistant/ShoppingAssistant";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreshMart | Farm Fresh Groceries",
  description: "Shop fresh vegetables, fruits and everyday grocery essentials with FreshMart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <ShoppingAssistant />
        </CartProvider>
      </body>
    </html>
  );
}