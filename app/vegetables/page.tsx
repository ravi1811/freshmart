import { Suspense } from "react";
import VegetablesPage from "@/components/product/VegetablesPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-white px-4 py-12">
          <div className="mx-auto max-w-7xl animate-pulse">
            <div className="h-10 w-64 rounded bg-gray-200" />
            <div className="mt-4 h-5 w-96 max-w-full rounded bg-gray-100" />
            <div className="mt-8 h-12 rounded-xl bg-gray-100" />
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="h-64 rounded-xl bg-gray-100"
                />
              ))}
            </div>
          </div>
        </main>
      }
    >
      <VegetablesPage />
    </Suspense>
  );
}