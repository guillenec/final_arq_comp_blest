import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, Talle } from "../types/Products"; // ojo: ya no importo CartItem

// Tipo local que refleja lo que realmente usas en el carrito
type CartLine = {
  product: Product;
  qty: number;
  size: keyof Talle;
};

type CartState = {
  items: CartLine[];
  add: (product: Product, quantity?: number, size?: keyof Talle) => void;
  remove: (productId: string, selectedTalle?: keyof Talle) => void; // <- corregido nombre
  clear: () => void;
  setQty: (productId: string, quantity: number, size: keyof Talle) => void;
  count: () => number;
  total: () => number;
};

export const useCart = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      items: [],

      add: (p: Product, qty: number = 1, size?: keyof Talle) =>
        set((s: CartState) => {
          // si no viene size, puedes decidir un default o no permitirlo
          const idx = s.items.findIndex(
            (i) => i.product.id === p.id && i.size === (size as keyof Talle)
          );

          if (idx >= 0) {
            const copy = [...s.items];
            copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
            return { items: copy };
          }

          // si size es opcional en la API, pero necesario en el dato, valida aquí
          if (!size) return { items: s.items };

          return { items: [...s.items, { product: p, qty, size }] };
        }),

      remove: (id: string, size?: keyof Talle) =>
        set((s: CartState) => ({
          items: s.items.filter(
            (i) => !(i.product.id === id && i.size === (size as keyof Talle))
          ),
        })),

      clear: () => set({ items: [] }),

      setQty: (id: string, qty: number, size: keyof Talle) =>
        set((s: CartState) => ({
          items: s.items.map((i) =>
            i.product.id === id && i.size === size ? { ...i, qty } : i
          ),
        })),

      count: () => get().items.reduce((a, b) => a + b.qty, 0),

      total: () =>
        get().items.reduce((a, b) => a + b.qty * (b.product.price ?? 0), 0),
    }),
    { name: "blest-cart" }
  )
);
