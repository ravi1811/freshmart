export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  isPopular?: boolean;
};