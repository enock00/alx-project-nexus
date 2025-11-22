"use client";

import Image from "next/image";
import { useCart, CartItem } from "@/context/CartContext";

type Props = {
  product: CartItem;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
      <Image
        src={product.image}
        alt={product.name}
        width={250}
        height={250}
        className="rounded-lg"
      />
      <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
      <p className="text-blue-600 font-bold">Ksh{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

