import { useUI } from "../store/ui";
import IconButton from "./ui/IconButtons";
import { useCart } from "../store/cart";
import { useFavs } from "../store/favorites";

export default function HeaderDesktop() {
  const toggleDrawer = useUI(s => s.toggleDrawer);
  const cartCount = useCart(s => s.count());
  const favCount = useFavs(s => s.ids.length);

  return (
    <header className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <button onClick={() => toggleDrawer(true)} className="p-3 rounded-xl bg-white shadow hover:bg-[#f3f0e3]" aria-label="Abrir menú">
          ☰
        </button>
        <a href="/" className="ml-2">
          <img src="/Logo-Blest1.svg" alt="Blest" className="h-8" />
        </a>
        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-6 text-[#283732] font-semibold">
          <a className="hover:text-[#b1182e]" href="/">Home</a>
          <a className="hover:text-[#b1182e]" href="/lista">Lista</a>
          <a className="hover:text-[#b1182e]" href="/nosotros">Nosotros</a>
          <a className="hover:text-[#b1182e]" href="/ayuda">Ayuda</a>
        </div>
        <div className="flex items-center gap-3">
          <IconButton ariaLabel="Buscar" icon={<span>🔎</span>} />
          <IconButton ariaLabel="Favoritos" icon={<span>❤</span>} active={favCount > 0} />
          <div className="relative">
            <IconButton ariaLabel="Carrito" icon={<span>🛍</span>} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#b1182e] text-white text-[10px] px-1 rounded">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
