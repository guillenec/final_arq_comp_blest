import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import type { Product } from "../types/Products";

export function useProducts(category?: string, max = 12) {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const col = collection(db, category ?? "buzos_sin_capucha"); // default
      const q = query(col, orderBy("createdAt", "desc"), limit(max));
      const snap = await getDocs(q);
      const list = snap.docs.map(d => ({ id: d.id, ...(d.data() as Omit<Product, "id">) }));
      setData(list);
      setLoading(false);
    })();
  }, [category, max]);

  return { data, loading };
}

export async function getProductById(category: string, id: string) {
  const ref = doc(db, category, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as Omit<Product, "id">) } as Product;
}
