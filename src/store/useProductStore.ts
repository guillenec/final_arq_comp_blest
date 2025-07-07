import { create } from 'zustand'

// tipo de producto segun los campos de firebase
type Talle = {
  s: number
  m: number
  l: number
  xl: number
}

type Images_serv = {
  image1: string
  image2: string
  image3: string
  image4?: string
}

type Product = {
  id : string
  name: string
  price: number
  description: string
  images : Images_serv,
  talles: Talle
  onAddToCart?: () => void // funcion para agregar al carrito
  tipo: string
}

type State = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

export const useProductStore = create<State>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));