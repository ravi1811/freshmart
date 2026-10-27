"use client";

import { useState } from "react";
import { CheckCircle2, MapPin, Truck } from "lucide-react";

export default function DeliveryChecker() {
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  const checkDelivery = () => {
    if (!/^\d{6}$/.test(pincode)) {
      setMessage("Please enter a valid 6-digit pincode.");
      return;
    }

    setMessage("Great! We'll check delivery availability for your area.");
  };

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-green-50">

          <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">

            <div className="flex gap-5">

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white sm:flex">
                <MapPin
                  size={28}
                  className="text-green-700"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 sm:hidden">
                  <MapPin
                    size={21}
                    className="text-green-700"
                  />

                  <span className="font-semibold text-green-800">
                    Delivery availability
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  We deliver to your area
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">
                  Enter your pincode to check whether FreshMart delivery is
                  available in your area.
                </p>
              </div>

            </div>

            <div className="w-full lg:w-[420px]">

              <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white">

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={pincode}
                  onChange={(event) => {
                    setPincode(
                      event.target.value.replace(/\D/g, "")
                    );
                    setMessage("");
                  }}
                  placeholder="Enter your pincode"
                  className="min-w-0 flex-1 px-4 py-3.5 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={checkDelivery}
                  className="bg-green-700 px-6 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  Check
                </button>

              </div>

              {message && (
                <div className="mt-3 flex items-center gap-2 text-sm text-green-700">
                  <CheckCircle2 size={16} />
                  {message}
                </div>
              )}

              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <Truck size={15} />
                Delivery availability will depend on your location.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}