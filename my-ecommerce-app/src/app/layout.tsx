import "./globals.css";
import { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <CartProvider>
          <Navbar /> 
          <main className="flex-1 container mx-auto px-6 py-10">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}







