import type { Product } from "@/types/product";

// Product images are stored in public/images/products.
// Keep these paths relative to the public directory (no trailing spaces).
export const products: Product[] = [
  // Vegetables
  { id: "1", name: "Potato", slug: "potato", price: 40, unit: "kg", image: "/images/products/vegetables/potato.png", category: "root", isPopular: true },
  { id: "2", name: "Tomato", slug: "tomato", price: 50, unit: "kg", image: "/images/products/vegetables/tomato.png", category: "fruiting", isPopular: true },
  { id: "3", name: "Carrot", slug: "carrot", price: 80, unit: "kg", image: "/images/products/vegetables/carrot.png", category: "root", isPopular: true },
  { id: "4", name: "Broccoli", slug: "broccoli", price: 100, unit: "kg", image: "/images/products/vegetables/broccoli.png", category: "fruiting", isPopular: true },
  { id: "5", name: "Cauliflower", slug: "cauliflower", price: 70, unit: "piece", image: "/images/products/vegetables/cauliflower.png", category: "fruiting", isPopular: true },
  { id: "6", name: "Green Capsicum", slug: "capsicum-green", price: 60, unit: "kg", image: "/images/products/vegetables/capsicum_green.png", category: "fruiting", isPopular: true },
  { id: "7", name: "Red Capsicum", slug: "capsicum-red", price: 90, unit: "kg", image: "/images/products/vegetables/capsicum_red.png", category: "fruiting" },
  { id: "8", name: "Onion", slug: "onion", price: 45, unit: "kg", image: "/images/products/vegetables/onion.png", category: "root", isPopular: true },
  { id: "9", name: "Cabbage", slug: "cabbage", price: 35, unit: "piece", image: "/images/products/vegetables/cabbage.png", category: "leafy" },
  { id: "10", name: "Spinach", slug: "spinach", price: 25, unit: "bunch", image: "/images/products/vegetables/spinach.png", category: "leafy" },
  // Fruits
  { id: "11", name: "Apple", slug: "apple", price: 180, unit: "kg", image: "/images/products/fruits/apple.png", category: "other", isPopular: true },
  { id: "12", name: "Banana", slug: "banana", price: 60, unit: "dozen", image: "/images/products/fruits/banana.png", category: "other", isPopular: true },
  { id: "13", name: "Orange", slug: "orange", price: 90, unit: "kg", image: "/images/products/fruits/orange.png", category: "other" },
  { id: "14", name: "Mango", slug: "mango", price: 120, unit: "kg", image: "/images/products/fruits/mango.png", category: "other" },
  { id: "15", name: "Grapes", slug: "grapes", price: 100, unit: "kg", image: "/images/products/fruits/grapes.png", category: "other" },
  { id: "16", name: "Pomegranate", slug: "pomegranate", price: 160, unit: "kg", image: "/images/products/fruits/pomegranate.png", category: "other" },
  { id: "17", name: "Watermelon", slug: "watermelon", price: 35, unit: "kg", image: "/images/products/fruits/watermelon.png", category: "other" },
  { id: "18", name: "Papaya", slug: "papaya", price: 50, unit: "kg", image: "/images/products/fruits/papaya.png", category: "other" },
  { id: "19", name: "Strawberry", slug: "strawberry", price: 220, unit: "box", image: "/images/products/fruits/strawberry.png", category: "other" },
  { id: "20", name: "Blueberry", slug: "blueberry", price: 300, unit: "box", image: "/images/products/fruits/blueberry.png", category: "other" },
  // Grocery and daily essentials
  { id: "21", name: "Milk", slug: "milk", price: 32, unit: "500 ml", image: "/images/products/groceries/milk.png", category: "other", isPopular: true },
  { id: "22", name: "Eggs", slug: "eggs", price: 90, unit: "dozen", image: "/images/products/groceries/eggs.png", category: "other" },
  { id: "23", name: "Rice", slug: "rice", price: 75, unit: "kg", image: "/images/products/groceries/rice.png", category: "other" },
  { id: "24", name: "Wheat Flour", slug: "wheat-flour", price: 55, unit: "kg", image: "/images/products/groceries/wheat_flour.png", category: "other" },
  { id: "25", name: "Cooking Oil", slug: "cooking-oil", price: 150, unit: "litre", image: "/images/products/groceries/cooking_oil.png", category: "other" },
  { id: "26", name: "Lentils / Dal", slug: "lentils-dal", price: 110, unit: "kg", image: "/images/products/groceries/lentils_dal.png", category: "beans" },
  { id: "27", name: "Sugar", slug: "sugar", price: 45, unit: "kg", image: "/images/products/groceries/sugar.png", category: "other" },
  { id: "28", name: "Tea", slug: "tea", price: 140, unit: "pack", image: "/images/products/groceries/tea.png", category: "other" },
  { id: "29", name: "Spices", slug: "spices", price: 60, unit: "pack", image: "/images/products/groceries/spices.png", category: "herbs" },
  { id: "30", name: "Snacks", slug: "snacks", price: 40, unit: "pack", image: "/images/products/groceries/snacks.png", category: "other" },
];
