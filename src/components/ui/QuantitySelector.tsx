
type Props = { value: number; onChange: (v: number) => void; min?: number; max?: number };

export default function QuantitySelector({ value, onChange, min = 1, max = 99 }: Props) {
  return (
    <div className="inline-flex items-center gap-2">
      <button onClick={() => onChange(Math.max(min, value - 1))}
        className="w-9 h-9 rounded-xl bg-white border shadow hover:bg-[#f3f0e3]">-</button>
      <span className="min-w-8 text-center font-semibold">{value}</span>
      <button onClick={() => onChange(Math.min(max, value + 1))}
        className="w-9 h-9 rounded-xl bg-white border shadow hover:bg-[#f3f0e3]">+</button>
    </div>
  );
}
