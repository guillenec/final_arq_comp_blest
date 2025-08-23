import { useProducts } from "../hooks/useProducts";
import CardBasicDesktop from "./CardBasicDesktop";

export default function ProductsGrid({ category }: { category?: string }) {
  const { data, loading } = useProducts(category, 12);

  if (loading) {
    return <div className="grid md:grid-cols-3 gap-6">{Array.from({ length: 6 }).map((_,i)=><div key={i} className="h-72 bg-[#f3f0e3] rounded-2xl animate-pulse" />)}</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {data.map(p => <CardBasicDesktop key={p.id} product={p} />)}
    </div>
  );
}
