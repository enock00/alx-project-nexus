"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const total = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">TechNova</Link>

      <div className="flex items-center gap-6">
        <Link href="/products" className="hover:text-blue-600">Products</Link>
        <Link href="/cart" className="relative hover:text-blue-600 font-semibold">
          🛒
          {total > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {total}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}


