import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DeliveryChecker from "@/components/home/DeliveryChecker";
import PromoBanner from "@/components/home/PromoBanner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Home(){return <main><Hero/><Categories/><FeaturedProducts/><PromoBanner/><WhyChooseUs/><DeliveryChecker/><section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8"><div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-green-900 px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-green-200">Need a hand?</p><h2 className="mt-2 text-2xl font-black sm:text-3xl">Let us help with your shopping list.</h2><p className="mt-2 text-sm text-green-100">Ask the FreshMart Assistant for ideas and budget-friendly picks.</p></div><Link href="/categories" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-green-900 hover:bg-green-50">Start shopping <ArrowRight size={17}/></Link></div></section></main>}
