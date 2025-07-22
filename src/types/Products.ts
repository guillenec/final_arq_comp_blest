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
  description: string;
  images: Images_serv;
  tipo: string;
  talle: Talle;
};
