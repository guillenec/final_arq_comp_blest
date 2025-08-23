import { useRef } from "react";
import type { Product } from "../types/Products";
import CardBasicDesktop from "./CardBasicDesktop";

type Props = { products: Product[]; title?: string };

export default function CarouselDesktop({ products, title }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = ref.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="my-8">
      {title && <h2 className="text-2xl font-extrabold text-[#283732] mb-4">{title}</h2>}
      <div className="relative">
        <button onClick={() => scroll("prev")}
          className="hidden md:grid place-items-center absolute left-0 top-1/2 -translate-y-1/2 w-10 h-16 rounded-xl bg-white shadow hover:scale-105">‹</button>
        <div ref={ref} className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 pb-2">
          {products.map(p => (
            <div key={p.id} className="min-w-[340px] snap-start">
              <CardBasicDesktop product={p} />
            </div>
          ))}
        </div>
        <button onClick={() => scroll("next")}
          className="hidden md:grid place-items-center absolute right-0 top-1/2 -translate-y-1/2 w-10 h-16 rounded-xl bg-white shadow hover:scale-105">›</button>
      </div>
    </section>
  );
}
