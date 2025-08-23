import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavs = create<{ ids: string[]; toggle: (id: string) => void }>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) =>
        set(() => {
          const has = get().ids.includes(id);
          return { ids: has ? get().ids.filter(x => x !== id) : [...get().ids, id] };
        }),
    }),
    { name: "blest-favs" }
  )
);
