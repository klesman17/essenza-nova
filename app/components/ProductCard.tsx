"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ product }: any) {
  const [hover, setHover] = useState(false);

  return (
    <div className="snap-start
        bg-white
        rounded-2xl
        shadow-sm
        hover:shadow-md
        transition
        p-4

        min-w-[160px]
        sm:min-w-[200px]
        md:min-w-[220px]">
      
      {/* Badge descuento */}
      
      

      {/* Imagen hover */}
      <div
        className="relative w-full h-40 mb-3 rounded-xl overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          src={hover && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-all duration-500"
        />
      </div>

      {/* Nombre */}
      <h3 className="text-sm font-medium text-neutral-900">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="text-yellow-500 text-xs mt-1">
        ⭐ {product.rating ?? "4.5"}
      </div>

      {/* Precio */}
      <p className="text-green-700 font-semibold mt-1">
        S/ {product.price}
      </p>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/56988934955?text=Hola!%20Me%20interesa%20${product.name}`}
        target="_blank"
        className="block mt-3 bg-green-700 text-white text-sm py-2 rounded-full text-center hover:bg-green-800 transition"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
