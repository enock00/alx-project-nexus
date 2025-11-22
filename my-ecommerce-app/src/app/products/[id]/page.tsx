"use client";

import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
      />

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-blue-600 font-semibold text-xl mt-2">
          ${product.price}
        </p>

        <p className="mt-4 text-gray-600">{product.description}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1,
            })
          }
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}



