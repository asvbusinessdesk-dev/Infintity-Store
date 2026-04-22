export type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  images: string[];
  categoryId: string;
  tags: string[];
  sizes: ProductSize[];
  stock: number;
  createdAt: string;
}
