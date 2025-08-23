import { useUI } from "../store/ui";

export default function MenuDrawer() {
  const { drawerOpen, toggleDrawer } = useUI();

  return (
    <div
      className={`fixed inset-0 z-50 ${drawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!drawerOpen}
    >
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${drawerOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => toggleDrawer(false)} />
      <aside
        className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl p-8 transition-transform
        ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <img src="/Logo-Blest1.svg" className="h-8 mb-8" alt="Blest" />
        <nav className="flex flex-col gap-6 text-2xl font-extrabold">
          <a className="text-[#b1182e]" href="/">Home</a>
          <a href="/lista" className="hover:text-[#b1182e]">Lista Productos</a>
          <a href="/nosotros" className="hover:text-[#b1182e]">Nosotros</a>
          <a href="/ayuda" className="hover:text-[#b1182e]">Ayuda</a>
        </nav>
      </aside>
    </div>
  );
}
