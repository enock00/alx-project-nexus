"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <Link href={`/products/${product.id}`} className="flex-1">
        <div className="w-full h-36 flex items-center justify-center">
          <Image src={product.image} alt={product.title} width={100} height={300} className="object-contain" />
        </div>
        <h3 className="mt-3 font-medium">{product.title}</h3>
        <p className="text-blue-600 font-bold">Ksh {product.price}</p>
      </Link>

      <button
        onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 })}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}


