"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ChevronDown,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";

type SortOption = "popular" | "price-low" | "price-high" | "name";

const categories = [
  { id: "all", name: "All Vegetables" },
  { id: "leafy", name: "Leafy Vegetables" },
  { id: "fruiting", name: "Fruiting Vegetables" },
  { id: "root", name: "Root Vegetables" },
  { id: "herbs", name: "Herbs & Seasoning" },
  { id: "beans", name: "Beans & Legumes" },
  { id: "other", name: "Fruits & Essentials" },
];

export default function VegetablesPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");
  const [search, setSearch] = useState(() => searchParam ?? "");
  const [selectedCategory, setSelectedCategory] = useState(() =>
    categoryParam && categories.some((item) => item.id === categoryParam)
      ? categoryParam
      : "all"
  );
  const [sort, setSort] = useState<SortOption>("popular");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const searchTerm = search.toLowerCase();

      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    }

    // Category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sorting
    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "name":
        result.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        result.sort(
          (a, b) =>
            Number(b.isPopular) - Number(a.isPopular)
        );
    }

    return result;
  }, [search, selectedCategory, sort]);

  return (
    <main className="min-h-screen bg-white">

      {/* Page Header */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Fresh every day
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Fresh Vegetables
          </h1>

          <p className="mt-4 max-w-xl text-gray-600">
            Choose from our selection of fresh and quality vegetables
            delivered to your doorstep.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Search + Sort */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:max-w-md">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search vegetables..."
              className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">

            <span className="text-sm text-gray-500">
              Sort by
            </span>

            <div className="relative">

              <select
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value as SortOption)
                }
                className="h-11 appearance-none rounded-xl border border-gray-200 bg-white pl-4 pr-10 text-sm font-medium outline-none focus:border-green-600"
              >
                <option value="popular">
                  Popular
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="name">
                  Name
                </option>
              </select>

              <ChevronDown
                size={17}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />

            </div>

          </div>

        </div>

        {/* Category Filters */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">

          <SlidersHorizontal
            size={19}
            className="mt-2 shrink-0 text-gray-500"
          />

          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() =>
                setSelectedCategory(category.id)
              }
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category.id
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}

        </div>

        {/* Result Count */}
        <div className="mt-8 mb-5">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-gray-50">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                No products found
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Try another search or category.
              </p>
            </div>
          </div>
        )}

      </section>
    </main>
  );
}