import type { Product } from "../types/Products";
import Button from "./ui/Buttons";
import IconButton from "./ui/IconButtons";
import { useFavs } from "../store/favorites";
import { useCart } from "../store/cart";
import { useUI } from "../store/ui";

type Props = { product: Product; onClick?: () => void };

export default function CardBasicDesktop({ product, onClick }: Props) {
  const toggleFav = useFavs(s => s.toggle);
  const favs = useFavs(s => s.ids);
  const add = useCart(s => s.add);
  const setLightbox = useUI(s => s.setLightbox);

  const liked = favs.includes(product.id);
  const img = product.images.image1 || product.images.image2 || product.images.image3 || product.images.image4 || "";

  return (
    <article className="group rounded-2xl border shadow-md overflow-hidden bg-white hover:shadow-lg transition">
      <div className="relative bg-[#283732]">
        <img
          src={img}
          alt={product.name}
          className="w-full aspect-[4/3] object-cover transition group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* botones flotantes */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <IconButton ariaLabel="Ver grande" icon={<span>⤢</span>} onClick={() => setLightbox(img)} />
          <IconButton ariaLabel="Favorito" icon={<span>❤</span>} active={liked} onClick={() => toggleFav(product.id)} />
          <IconButton ariaLabel="Agregar" icon={<span>🛒</span>} onClick={() => add(product, 1)} />
        </div>
      </div>

      <div className="p-4">
        <h3 onClick={onClick} className="text-[#b1182e] font-extrabold text-lg cursor-pointer hover:underline">
          {product.name}
        </h3>
        <p className="mt-1 text-[#283732] font-black text-xl tracking-tight">
          ${product.price.toLocaleString("es-AR")}
        </p>
        {product.cuotas && (
          <p className="text-xs mt-1 text-[#b1182e]">6 x ${(product.price / 6).toFixed(2)}</p>
        )}

        <div className="mt-3">
          <Button onClick={() => add(product, 1)} className="w-full">Comprar</Button>
        </div>
      </div>
    </article>
  );
}
