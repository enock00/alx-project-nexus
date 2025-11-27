"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const price = searchParams.get("price") ?? "";
  const page = Number(searchParams.get("page") ?? "1");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const url = `https://fakestoreapi.com/products?limit=50`;
      const res = await fetch(url);
      let data = await res.json();

      
      if (search) {
        data = data.filter((p: any) =>
          p.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (category) {
        data = data.filter((p: any) => p.category === category);
      }

      if (price === "low") data = data.sort((a: any, b: any) => a.price - b.price);
      if (price === "high") data = data.sort((a: any, b: any) => b.price - a.price);

      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, [search, category, price]);

  const productsPerPage = 6;
  const start = (page - 1) * productsPerPage;
  const paginated = products.slice(start, start + productsPerPage);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    params.set("page", "1"); 
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search"
          defaultValue={search}
          className="border p-2 rounded w-60"
          onChange={(e) => updateQuery("search", e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => updateQuery("category", e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
        </select>

        <select
          className="border p-2 rounded"
          value={price}
          onChange={(e) => updateQuery("price", e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Products grid */}
      {loading ? (
        <p className="text-center py-20">Loading...</p>
      ) : paginated.length === 0 ? (
        <p className="text-center py-20">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginated.map((p: any) => (
            <div key={p.id} className="border rounded shadow p-4">
              <img
                src={p.image}
                className="h-40 mx-auto object-contain"
                alt={p.title}
              />
              <h2 className="mt-3 font-semibold">{p.title}</h2>
              <p className="text-green-600 font-bold mt-1">Ksh {p.price}</p>
              <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded">
                View
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => updateQuery("page", String(i + 1))}
            className={`px-4 py-2 rounded ${
              page === i + 1 ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
}



