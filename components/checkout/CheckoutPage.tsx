"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  MapPin,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

type PaymentMethod = "cod" | "online";

type AddressForm = {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
};

export default function CheckoutPage() {
  const { cartItems, cartTotal } = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("cod");

  const [address, setAddress] = useState<AddressForm>({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateAddress = (
    field: keyof AddressForm,
    value: string
  ) => {
    setAddress((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex min-h-[75vh] items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <CheckCircle2
              size={42}
              className="text-green-700"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Order placed successfully!
          </h1>

          <p className="mt-3 text-gray-500">
            Thank you for shopping with us. Your fresh
            vegetables will be delivered to your address.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">
              Order total
            </p>

            <p className="mt-1 text-2xl font-bold text-gray-900">
              ₹{cartTotal}
            </p>

            <p className="mt-2 text-sm text-green-700">
              Payment:{" "}
              {paymentMethod === "cod"
                ? "Cash on Delivery"
                : "Online Payment"}
            </p>
          </div>

          <Link
            href="/vegetables"
            className="mt-7 inline-flex rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white hover:bg-green-800"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">

          <ShoppingBag
            size={45}
            className="mx-auto text-gray-300"
          />

          <h1 className="mt-5 text-2xl font-bold">
            Your cart is empty
          </h1>

          <p className="mt-2 text-gray-500">
            Add some vegetables before checkout.
          </p>

          <Link
            href="/vegetables"
            className="mt-6 inline-flex rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white"
          >
            Shop Vegetables
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div>
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-700"
          >
            <ArrowLeft size={16} />
            Back to cart
          </Link>

          <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-gray-500">
            Complete your details to place your order.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]"
        >

          {/* LEFT */}
          <div className="space-y-6">

            {/* Address */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                  <MapPin
                    size={20}
                    className="text-green-700"
                  />
                </div>

                <div>
                  <h2 className="font-bold text-gray-900">
                    Delivery Address
                  </h2>

                  <p className="text-sm text-gray-500">
                    Where should we deliver your vegetables?
                  </p>
                </div>

              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    required
                    value={address.name}
                    onChange={(event) =>
                      updateAddress(
                        "name",
                        event.target.value
                      )
                    }
                    className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>

                  <input
                    required
                    type="tel"
                    value={address.phone}
                    onChange={(event) =>
                      updateAddress(
                        "phone",
                        event.target.value
                      )
                    }
                    className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    placeholder="Enter mobile number"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Address
                  </label>

                  <textarea
                    required
                    rows={3}
                    value={address.address}
                    onChange={(event) =>
                      updateAddress(
                        "address",
                        event.target.value
                      )
                    }
                    className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    placeholder="House / Flat / Building / Street"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    City
                  </label>

                  <input
                    required
                    value={address.city}
                    onChange={(event) =>
                      updateAddress(
                        "city",
                        event.target.value
                      )
                    }
                    className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Pincode
                  </label>

                  <input
                    required
                    inputMode="numeric"
                    maxLength={6}
                    value={address.pincode}
                    onChange={(event) =>
                      updateAddress(
                        "pincode",
                        event.target.value.replace(/\D/g, "")
                      )
                    }
                    className="mt-2 h-11 w-full rounded-lg border border-gray-200 px-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    placeholder="6-digit pincode"
                  />
                </div>

              </div>

            </section>

            {/* Delivery */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">

              <h2 className="font-bold text-gray-900">
                Delivery Method
              </h2>

              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">

                <div className="flex items-start gap-3">

                  <input
                    type="radio"
                    checked
                    readOnly
                    className="mt-1 accent-green-700"
                  />

                  <div>
                    <p className="font-semibold text-gray-900">
                      Standard Delivery
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Delivery charges will be calculated
                      based on your location.
                    </p>
                  </div>

                </div>

              </div>

            </section>

            {/* Payment */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                  <CreditCard
                    size={20}
                    className="text-green-700"
                  />
                </div>

                <div>
                  <h2 className="font-bold text-gray-900">
                    Payment Method
                  </h2>

                  <p className="text-sm text-gray-500">
                    Choose how you want to pay.
                  </p>
                </div>

              </div>

              <div className="mt-5 space-y-3">

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 hover:bg-gray-50">

                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() =>
                      setPaymentMethod("cod")
                    }
                    className="accent-green-700"
                  />

                  <div>
                    <p className="font-semibold text-gray-900">
                      Cash on Delivery
                    </p>

                    <p className="text-sm text-gray-500">
                      Pay when your order arrives.
                    </p>
                  </div>

                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 hover:bg-gray-50">

                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={() =>
                      setPaymentMethod("online")
                    }
                    className="accent-green-700"
                  />

                  <div>
                    <p className="font-semibold text-gray-900">
                      Online Payment
                    </p>

                    <p className="text-sm text-gray-500">
                      Payment gateway will be connected later.
                    </p>
                  </div>

                </label>

              </div>

            </section>

          </div>

          {/* RIGHT */}
          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-lg font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4 text-sm"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {item.name}
                    </p>

                    <p className="text-gray-500">
                      {item.quantity} × ₹{item.price}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ₹{item.quantity * item.price}
                  </p>
                </div>
              ))}

              <div className="border-t pt-4">

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium">
                    ₹{cartTotal}
                  </span>
                </div>

                <div className="mt-3 flex justify-between">
                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="text-sm text-green-700">
                    Calculated later
                  </span>
                </div>

                <div className="mt-4 flex justify-between border-t pt-4">

                  <span className="font-bold">
                    Total
                  </span>

                  <span className="text-xl font-bold">
                    ₹{cartTotal}
                  </span>

                </div>

              </div>

            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-green-700 py-3.5 text-sm font-bold text-white transition hover:bg-green-800"
            >
              Place Order
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-400">
              By placing your order, you agree to our
              terms and conditions.
            </p>

          </aside>

        </form>

      </div>

    </main>
  );
}