import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#edf6df] md:grid-cols-2">
        <div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-green-800">
            <Sparkles size={15} /> Fresh deals this week
          </span>
          <h2 className="mt-5 max-w-lg text-3xl font-black leading-tight tracking-tight text-green-950 sm:text-4xl">
            More freshness. <span className="text-green-700">Less spending.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
            Explore seasonal produce and everyday grocery essentials for your next shopping trip.
          </p>
          <Link href="/offers" className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-800">
            Explore offers <ArrowRight size={17} />
          </Link>
        </div>
        <div className="relative min-h-64 bg-green-100 sm:min-h-80">
          <Image src="/images/vegetable-hero.jpg" alt="Fresh seasonal vegetables for your kitchen" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
