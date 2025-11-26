"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function ProductDetailsClient({ product }: any) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="rounded-xl"
      />

      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <p className="text-blue-600 font-bold text-2xl mt-4">${product.price}</p>

        <button
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: 1,
            })
          }
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
