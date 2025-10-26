import { StaticImageData } from 'next/image';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
}

export interface ProductCategory {
  id: number;
  cName: string;
  image: StaticImageData;
  cDescription: string;
  products: Product[];
}