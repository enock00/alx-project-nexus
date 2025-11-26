"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function ProductDetailsPage() {
  const { addToCart, addedItem } = useCart();
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    async function load() {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      if (!cancelled) setProduct(data);
      setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div className="flex items-center justify-center">
        <Image src={product.image} alt={product.title} width={500} height={500} className="object-contain" />
      </div>

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl text-blue-600 font-semibold mt-2">${product.price}</p>
        <p className="mt-4 text-gray-700">{product.description}</p>

        <button
          onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1 })}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Add to Cart
        </button>

        {/* toast */}
        {addedItem && addedItem.id === product.id && (
          <div className="fixed top-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
            Added to cart!
          </div>
        )}
      </div>
    </div>
  );
}






