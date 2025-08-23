import { useMemo, useState } from "react";
import type { Product, Talle } from "../types/Products";
import QuantitySelector from "./ui/QuantitySelector";
import Button from "./ui/Buttons";
import Breadcrumbs from "./ui/Breadcrumbs";
import { useCart } from "../store/cart";
import { useUI } from "../store/ui";

export default function ProductDetailDesktop({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState<keyof Talle | undefined>("s");
  const add = useCart(s => s.add);
  const setLightbox = useUI(s => s.setLightbox);

  const images = useMemo(() =>
    [product.images.image1, product.images.image2, product.images.image3, product.images.image4].filter(Boolean) as string[],
  [product]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Breadcrumbs items={[
        { label: "Inicio", href: "/" },
        { label: "Buzos", href: "/lista" },
        { label: product.name }
      ]} />

      <div className="grid md:grid-cols-[1.1fr,1fr] gap-8">
        {/* galería */}
        <div className="grid grid-cols-[88px,1fr] gap-4">
          <div className="flex md:flex-col gap-3 overflow-auto">
            {images.map((src, idx) => (
              <img key={idx} src={src} alt="" className="size-20 rounded-xl object-cover border hover:opacity-90 cursor-pointer"
                onClick={() => setLightbox(src)} />
            ))}
          </div>
          <div className="bg-[#283732] rounded-2xl p-3">
            <img src={images[0]} alt={product.name} className="w-full rounded-xl object-cover" />
          </div>
        </div>

        {/* info */}
        <div>
          <h1 className="text-3xl font-extrabold text-[#283732]">{product.name}</h1>
          <p className="mt-2 text-[#b1182e] font-extrabold text-2xl">${product.price.toLocaleString("es-AR")}</p>
          <p className="text-sm mt-1">12 cuotas sin interés de ${(product.price/12).toFixed(0)}</p>
          <p className="text-sm text-[#283732] mt-1">10% de descuento pagando con transferencia o débito</p>

          <div className="mt-4">
            <span className="block text-sm font-semibold mb-2">TALLE</span>
            <div className="flex gap-2">
              {(["s","m","l","xl"] as (keyof Talle)[]).map(t => (
                <button key={t}
                  className={`w-10 h-10 rounded-xl border ${size===t ? "bg-[#b1182e] text-white" : "bg-white hover:bg-[#f3f0e3]"}`}
                  onClick={() => setSize(t)}>{t.toUpperCase()}</button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <QuantitySelector value={qty} onChange={setQty} />
            <Button onClick={() => add(product, qty, size)} className="min-w-52">Agregar al carrito</Button>
          </div>

          <div className="mt-6">
            <h3 className="font-extrabold text-lg mb-2">Descripción</h3>
            <p className="text-sm text-[#283732] leading-relaxed">{product.description ?? "Prenda de algodón premium con estampado Blest."}</p>
          </div>

          {/* tabla simple de medidas */}
          <div className="mt-6">
            <h3 className="font-extrabold text-lg mb-2">Tabla de Medidas</h3>
            <div className="overflow-x-auto">
              <table className="min-w-[480px] text-sm">
                <thead>
                  <tr className="text-white bg-[#b1182e]">
                    {["Talle", "Largo", "Ancho", "Mangas", "Cuello Hombro"].map(h=>(
                      <th key={h} className="px-3 py-2 text-left">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["S","66cm","65cm","64cm","24cm"],
                    ["M","65cm","68cm","67cm","25cm"],
                    ["L","66cm","70cm","68cm","26cm"],
                    ["XL","75cm","72cm","69cm","27cm"],
                  ].map((row,i)=>(
                    <tr key={i} className="odd:bg-white even:bg-[#f3f0e3]">
                      {row.map((c,j)=><td key={j} className="px-3 py-2 rounded-xl">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
