
import type { Product } from "../types/Products";
import Button from "./ui/Buttons";
import { useCart } from "../store/cart";

export default function CardBasicMobile({ product }: { product: Product }) {
  const add = useCart(s => s.add);
  const img = product.images.image1 || product.images.image2 || "";

  return (
    <article className="rounded-2xl border shadow bg-white overflow-hidden">
      <img src={img} alt={product.name} className="w-full aspect-square object-cover" />
      <div className="p-3">
        <h3 className="text-[#b1182e] font-extrabold">{product.name}</h3>
        <p className="text-[#283732] font-black text-lg">${product.price.toLocaleString("es-AR")}</p>
        <Button onClick={() => add(product)} className="w-full mt-2">Comprar</Button>
      </div>
    </article>
  );
}
