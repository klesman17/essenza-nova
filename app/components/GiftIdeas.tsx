"use client";

import products from "../data/products";
import ProductCard from "./ProductCard";

export default function GiftIdeas() {
  return (
    <section className="w-full mt-24 mb-32">
      <h2 className="text-3xl font-serif font-target text-[#e1ece6] text-center mb-20">
        ideas para regalar
      </h2>

      <div className="overflow-x-auto snap-x snap-mandatory no-scrollbar px-6">
        <div className="flex gap-4 w-max">
          {products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
