"use client";

import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchElectronics() {
      const res = await fetch("https://fakestoreapi.com/products/category/electronics");
      const data = await res.json();
      setProducts(data);
    }
    fetchElectronics();
  }, []);

  return (
    <div className="space-y-20" >

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center bg-white shadow rounded-3xl p-12">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Discover the Best Electronics
          </h1>
          <p className="text-gray-600">
            Shop phones, laptops, accessories, and more at unbeatable prices.
          </p>
          <Link
            href="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Shop Now
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/images/hero.png"
            width={600}
            height={850}
            alt="Hero Banner"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Featured Electronics</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/products" className="text-blue-600 hover:underline">
            View All →
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Shop Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { name: "Phones", img: "/images/category-phone.png" },
            { name: "Laptops", img: "/images/category-laptop.png" },
            { name: "Accessories", img: "/images/category-accessories.jpg" },
            { name: "Wearables", img: "/images/category-watch.jpg" },
          ].map((category) => (
            <div
              key={category.name}
              className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={category.img}
                width={300}
                height={600}
                alt={category.name}
                className="w-full h-65 object-cover"
              />
              <h3 className="p-3 font-medium text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}






