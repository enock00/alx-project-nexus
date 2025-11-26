"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  if (cart.length === 0)
    return <p className="text-center mt-20">Cart empty</p>;

  
  const goToPayment = () => {
    router.push(`/payment?amount=${total}`);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <button
        onClick={goToPayment}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Proceed to Payment
      </button>

      {cart.map((c) => (
        <div key={c.id} className="flex justify-between py-2">
          <div>
            {c.title} x {c.quantity}
          </div>
          <div>Ksh {(c.price * c.quantity).toFixed(2)}</div>
        </div>
      ))}

      <div className="text-center mt-4">
        <div className="text-xl font-bold">
          Total: Ksh {total.toFixed(2)}
        </div>

        <button
          onClick={goToPayment}
          className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
