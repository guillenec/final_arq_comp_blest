import type { Timestamp } from "firebase/firestore/lite";

type Talle = {
  s: number;
  m: number;
  l: number;
  xl: number;
};

type Images_serv = {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  images: Images_serv;
  tipo: string;
  talle: Talle;
  cuotas?: number;
  categoria?: string;
  fecha: Timestamp;
};

export type CartItem = {
  producto: Product;
  qty:number;
  size?:keyof Talle; 
}
