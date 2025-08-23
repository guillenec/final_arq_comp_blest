import { create } from "zustand";

type UIState = {
  drawerOpen: boolean;
  toggleDrawer: (v?: boolean) => void;
  lightboxImage?: string | null;
  setLightbox: (url?: string | null) => void;
};

export const useUI = create<UIState>((set) => ({
  drawerOpen: false,
  toggleDrawer: (v) => set((s) => ({ drawerOpen: typeof v === "boolean" ? v : !s.drawerOpen })),
  lightboxImage: null,
  setLightbox: (url) => set({ lightboxImage: url ?? null }),
}));
