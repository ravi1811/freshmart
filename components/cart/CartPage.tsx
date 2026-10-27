"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-[70vh] px-4 py-16">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <ShoppingBag
              size={35}
              className="text-green-700"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add some fresh vegetables to your cart and
            they&apos;ll appear here.
          </p>

          <Link
            href="/vegetables"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white hover:bg-green-800"
          >
            Shop vegetables
            <ArrowRight size={17} />
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Your shopping bag
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Cart items */}
          <div className="space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
              >

                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-50">
                  <Image
                    src={item.image?.startsWith("/") ? item.image : "/images/products/vegetables/potato.png"}
                    alt={item.name}
                    width={112}
                    height={112}
                    onError={(event) => {
                      event.currentTarget.src = "/images/products/vegetables/potato.png";
                    }}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between">

                  <div className="flex justify-between gap-3">

                    <div>
                      <h2 className="font-semibold text-gray-900">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        ₹{item.price} / {item.unit}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-gray-400 hover:text-red-500"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center rounded-lg border border-gray-200">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="flex h-9 w-9 items-center justify-center hover:bg-gray-50"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-10 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="flex h-9 w-9 items-center justify-center hover:bg-gray-50"
                      >
                        <Plus size={14} />
                      </button>

                    </div>

                    <p className="font-bold text-gray-900">
                      ₹{item.price * item.quantity}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-lg font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-medium">
                  ₹{cartTotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="font-medium text-green-700">
                  Calculated at checkout
                </span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-bold">
                    Total
                  </span>

                  <span className="text-xl font-bold">
                    ₹{cartTotal}
                  </span>
                </div>
              </div>

            </div>

            <Link
              href="/checkout"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 py-3.5 text-sm font-bold text-white hover:bg-green-800"
            >
              Proceed to Checkout
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/vegetables"
              className="mt-4 block text-center text-sm font-medium text-green-700 hover:text-green-800"
            >
              Continue shopping
            </Link>

          </aside>

        </div>

      </div>

    </main>
  );
}