import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Truck, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3f8e9]">
      <div className="mx-auto grid min-h-[570px] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-14">
        <div className="relative z-10">
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-green-700 sm:text-sm"><Leaf size={18} /> Farm fresh every day</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-[#103b25] sm:text-6xl lg:text-[4.4rem]">Good food.<br />Fresh from the<br /><span className="text-green-700">farm to you.</span></h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">Shop hand-picked vegetables, juicy fruits and everyday essentials — fresh quality delivered to your doorstep.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/vegetables" className="inline-flex items-center gap-3 rounded-full bg-green-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-green-800">Shop fresh produce <ArrowRight size={18} /></Link>
            <Link href="/categories" className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-6 py-3.5 text-sm font-bold text-green-900 transition hover:bg-white">Explore categories</Link>
          </div>
          <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
            {[{Icon:Leaf,title:"Farm fresh",text:"Picked with care"},{Icon:Truck,title:"Quick delivery",text:"At your doorstep"},{Icon:ShieldCheck,title:"Quality first",text:"Freshness checked"}].map(({Icon,title,text})=><div key={title} className="rounded-2xl border border-white/80 bg-white/80 p-3 sm:p-4"><Icon className="mb-2 text-green-700" size={23}/><p className="text-xs font-bold text-slate-900 sm:text-sm">{title}</p><p className="mt-1 text-[11px] text-slate-500 sm:text-xs">{text}</p></div>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[650px]">
          <div className="absolute -inset-5 rounded-[3rem] bg-green-200/50 blur-2xl" />
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-[2rem] border-8 border-white/70 bg-green-100 shadow-2xl shadow-green-950/10 sm:rounded-[2.5rem]">
            <Image src="/images/vegetable-hero.jpg" alt="A basket of fresh farm vegetables" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-4 left-3 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl sm:bottom-6 sm:-left-7 sm:p-4"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700"><Sparkles size={21}/></span><div><p className="text-sm font-extrabold text-slate-900">Freshness you can see</p><p className="text-xs text-slate-500">Everyday essentials, made easy</p></div></div>
        </div>
      </div>
    </section>
  );
}
