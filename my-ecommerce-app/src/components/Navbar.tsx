"use client"; // MUST be first line

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        TechNova Store
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/products" className="hover:text-blue-600">
          Products
        </Link>

        <Link href="/cart" className="relative hover:text-blue-600 font-semibold">
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

