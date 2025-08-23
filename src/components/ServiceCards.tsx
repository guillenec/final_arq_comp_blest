
const data = [
  { title: "Compra con seguridad", text: "Política de devolución" },
  { title: "Envíos gratis", text: "Compras > $60.000 · Andreani/Correo" },
  { title: "3 y 6 cuotas sin interés", text: "15% OFF Efectivo/Transferencia" },
];

export default function ServiceCards() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 my-10">
      {data.map((c, i) => (
        <div key={i} className="rounded-2xl bg-white px-6 py-5 shadow-[0_8px_0_#dedede] border hover:shadow-[0_10px_0_#cfcfcf] transition">
          <h4 className="font-extrabold text-[#283732]">{c.title}</h4>
          <p className="text-sm mt-1">{c.text}</p>
        </div>
      ))}
    </section>
  );
}
