import ProductCard from "@/components/ProductCard";

export default async function CategoryPage({ params }: any) {
  const { category } = params;

  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
    { cache: "no-store" }
  );

  const products = await res.json();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
