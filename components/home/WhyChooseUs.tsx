import {
  Leaf,
  ShieldCheck,
  Truck,
  BadgeIndianRupee,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Farm Fresh",
    description: "Fresh vegetables sourced regularly from trusted farmers.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checked",
    description: "Every order is checked before it reaches your doorstep.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your fresh vegetables delivered conveniently to your home.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Fair Prices",
    description: "Good quality vegetables at competitive everyday prices.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Why FreshMart
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Freshness you can trust
          </h2>

          <p className="mt-4 text-gray-600">
            We make buying fresh vegetables simple, convenient and reliable.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                  <Icon
                    size={27}
                    className="text-green-700"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-5 font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}