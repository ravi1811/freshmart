"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const { addToCart } = useCart();

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">

        <Link href={`/search?q=${encodeURIComponent(product.name)}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setLiked((current) => !current)}
          aria-label={
            liked
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105"
        >
          <Heart
            size={18}
            className={liked ? "fill-red-500 text-red-500" : "text-gray-600"}
          />
        </button>

        {product.isPopular && (
          <span className="absolute left-3 top-3 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
            Popular
          </span>
        )}

      </div>

      {/* Product Details */}
      <div className="p-4">

        <Link href={`/search?q=${encodeURIComponent(product.name)}`}>
          <h3 className="font-semibold text-gray-900 transition hover:text-green-700">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>

          <span className="ml-1 text-sm text-gray-500">
            / {product.unit}
          </span>
        </p>

        {/* Quantity + Add */}
        <div className="mt-4 flex items-center gap-2">

          <div className="flex h-10 items-center rounded-lg border border-gray-200">

            <button
              type="button"
              onClick={decreaseQuantity}
              className="flex h-full w-9 items-center justify-center text-gray-600 hover:bg-gray-50"
              aria-label="Decrease quantity"
            >
              <Minus size={15} />
            </button>

            <span className="w-10 text-center text-sm font-medium">
              {quantity}
            </span>

            <button
              type="button"
              onClick={increaseQuantity}
              className="flex h-full w-9 items-center justify-center text-gray-600 hover:bg-gray-50"
              aria-label="Increase quantity"
            >
              <Plus size={15} />
            </button>

          </div>

          <button
            type="button"
            onClick={() => addToCart(product, quantity)}
            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-green-700 text-sm font-semibold text-white transition hover:bg-green-800"
            >
            <ShoppingCart size={16} />
            Add
          </button>

        </div>

      </div>
    </article>
  );
}