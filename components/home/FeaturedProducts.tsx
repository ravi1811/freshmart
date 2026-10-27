import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.filter(
    (product) => product.isPopular
  );

  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 flex items-end justify-between">

          <div>
            <div className="mb-2 flex items-center gap-2">
              <Leaf size={20} className="text-green-700" />

              <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                Fresh today
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Today&apos;s fresh picks
            </h2>
          </div>

          <Link
            href="/vegetables"
            className="hidden items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 sm:flex"
          >
            View all
            <ArrowRight size={17} />
          </Link>

        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        {/* Mobile link */}
        <Link
          href="/vegetables"
          className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-green-700 sm:hidden"
        >
          View all vegetables
          <ArrowRight size={17} />
        </Link>

      </div>
    </section>
  );
}