"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];

    return products.filter((product) =>
      product.name.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  return (
    <main className="mx-auto min-h-[65vh] max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[.18em] text-green-700">
        Find your favourites
      </p>
      <h1 className="mt-2 text-4xl font-black text-slate-900">
        Search FreshMart
      </h1>
      <div className="relative mt-7 max-w-2xl">
        <SearchIcon
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search tomatoes, apples, rice…"
          className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />
      </div>
      <p className="mt-6 text-sm text-slate-500">
        {query
          ? `${results.length} result(s) for “${query}”`
          : "Start typing to find products."}
      </p>
      {query && (
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto min-h-[65vh] max-w-7xl px-4 py-12">
          Loading search...
        </main>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
