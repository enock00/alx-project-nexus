import ProductCard from "@/components/ProductCard";

async function getElectronics() {
  const res = await fetch("https://fakestoreapi.com/products/category/electronics", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function ProductsPage() {
  const products = await getElectronics();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Electronics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p: any) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

