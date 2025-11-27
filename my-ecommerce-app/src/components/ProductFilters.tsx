"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ProductFilters({ categories }: { categories: string[] }) {
  const router = useRouter();
  const params = useSearchParams();

  const handleSearch = (e: any) => {
    router.push(`/products?search=${e.target.value}`);
  };

  const handleCategory = (e: any) => {
    router.push(`/products?category=${e.target.value}`);
  };

  const handlePrice = (e: any) => {
    router.push(`/products?price=${e.target.value}`);
  };

  return (
    <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <input
        defaultValue={params.get("search") || ""}
        type="text"
        onChange={handleSearch}
        placeholder="Search products..."
        className="border px-4 py-2 rounded w-full md:w-1/3"
      />

      {/* Category */}
      <select
        defaultValue={params.get("category") || ""}
        onChange={handleCategory}
        className="border px-4 py-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Price Filter */}
      <select
        defaultValue={params.get("price") || ""}
        onChange={handlePrice}
        className="border px-4 py-2 rounded"
      >
        <option value="">Sort by Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </div>
  );
}
