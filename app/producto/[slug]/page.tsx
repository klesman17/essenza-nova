"use client";

import { useState, useRef } from "react";
import { useParams } from "next/navigation";




const products = [
  {
    slug: "natura-homem",
    name: "Natura Homem",
    description:
      "Fragancia masculina sofisticada con notas amaderadas, ideal para el día a día.",
     price: "S/ 189",
     benefits: [
     "Aroma duradero hasta 8 horas",
     "Notas amaderadas elegantes",
     "Ideal para uso diario",
     "Presentación premium",
    ], 
    images: [
      "/products/productos1/Natura_Homem1.jpg",
      "/products/productos1/Natura_Homem2.jpg",
      "/products/productos1/Natura_Homem3.jpg",
    ],
  },
  {
    slug: "humor-beijo",
    name: "Humor Beijo",
    description:
      "Aroma dulce y envolvente que transmite conexión, alegría y frescura.",
    images: [
      "/products/productos2/Humor_beijo1.jpg",
      "/products/productos2/Humor_beijo2.jpg",
      "/products/productos2/Humor_beijo3.jpg",
    ],
  },
  {
    slug: "desodorante-antitranspirante",
    name: "Desodorante Antitranspirante",
    description:
      "Protección efectiva con una sensación fresca y natural durante todo el día.",
    images: [
      "/products/productos3/Desodorante_antitranspirante1.jpg",
      "/products/productos3/Desodorante_antitranspirante2.jpg",
      "/products/productos3/Desodorante_antitranspirante3.jpg",
    ],
  },
];

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-10">Producto no encontrado</div>;
  }

  const [activeImage, setActiveImage] = useState(product.images[1]);
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <>
      {/* ✅ FONDO CON LA PRIMERA IMAGEN */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.35),
        rgba(0,0,0,0.35)
      ),
      url(${product.images[0]})
    `,
        }}
      />

      <main className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="bg-/90 backdrop-blur-xl rounded-3xl p-10 grid grid-cols-1 md:grid-cols-2 gap-14">
          
          {/* GALERÍA */}
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              ref={imageRef}
              src={activeImage}
              alt={product.name}
              className="w-full h-[420px] object-cover transition-transform duration-300"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.transformOrigin = `${x}% ${y}%`;
                e.currentTarget.style.transform = "scale(2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.transformOrigin = "center";
              }}
            />

            <div className="flex gap-4 mt-4">
              {product.images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer transition
                    ${
                      activeImage === img
                        ? "ring-2 ring-green-700 scale-105"
                        : "opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                  alt=""
                />
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-serif mb-4">{product.name}</h1>
            <span className="text-2xl font-semibold text-green-700 mb-4">
              {product.price}
            </span>

            <p className="text-neutral-600 mb-6">{product.description}</p>

            <h2 className="text-xl font-semibold mb-3">Beneficios</h2>
            <ul className="space-y-2 mb-8">
              {product.benefits?.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-green-700">✔</span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/56988934955?text=${encodeURIComponent(
                `Hola 👋, quiero comprar *${product.name}* por ${product.price}. ¿Está disponible?`
              )}`}
              target="_blank"
              className="bg-green-700 text-white px-8 py-3 rounded-full w-fit hover:bg-green-800 transition"
            >
              Comprar ahora por WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

