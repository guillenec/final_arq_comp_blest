
type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-[#283732] mb-4">
      {items.map((c, i) => (
        <span key={i}>
          {c.href ? <a href={c.href} className="hover:text-[#b1182e]">{c.label}</a> : <span className="font-semibold">{c.label}</span>}
          {i < items.length - 1 && <span className="mx-2">›</span>}
        </span>
      ))}
    </nav>
  );
}
