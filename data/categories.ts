export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

// All paths point to real image files inside public/images.
// Next.js serves these files from the site root, so do not include "public" in the URL.
export const categories: Category[] = [
  {
    id: "leafy",
    name: "Leafy Vegetables",
    description: "Fresh greens",
    image: "/images/products/vegetables/spinach.png",
  },
  {
    id: "fruiting",
    name: "Fruiting Vegetables",
    description: "Tomato, capsicum & more",
    image: "/images/products/vegetables/tomato.png",
  },
  {
    id: "root",
    name: "Root Vegetables",
    description: "Potato, carrot & more",
    image: "/images/products/vegetables/carrot.png",
  },
  {
    id: "herbs",
    name: "Herbs & Seasoning",
    description: "Fresh herbs & spices",
    image: "/images/products/groceries/spices.png",
  },
  {
    id: "beans",
    name: "Beans & Legumes",
    description: "Fresh beans & peas",
    image: "/images/products/groceries/lentils_dal.png",
  },
  {
    id: "other",
    name: "Fruits & Daily Essentials",
    description: "Fruit, dairy and pantry staples",
    image: "/images/products/fruits/apple.png",
  },
];
