"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  if (cart.length === 0) {
    return <div className="text-center mt-20"><h2>Your cart is empty</h2><Link href="/products" className="text-blue-600">Browse</Link></div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
          <Image src={item.image} width={80} height={80} alt={item.title} />
          <div className="flex-1">
            <div className="font-semibold">{item.title}</div>
            <div className="text-blue-600">Ksh {item.price}</div>
            <div className="flex items-center gap-2 mt-2">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded">+</button>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}

      <div className="text-right">
        <div className="text-xl font-bold">Total: Ksh {total.toFixed(2)}</div>
        <div>
        <Link href="/checkout" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">Checkout</Link>
        </div>
      </div>
    </div>
  );
}

