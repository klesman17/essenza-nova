"use client";

import React, { useState } from "react";
import WhatsappButton from "./components/WhatsappButton";
import Link from "next/link";
import LanzamientosCarousel from "./components/LanzamientosCarousel";
import VideosCarousel from "./components/VideosCarousel";
import GiftIdeas from "./components/GiftIdeas";
import Footer from "./components/footer";
 


const WHATSAPP_NUMBER = "+56988934955";

const products = [
  {
    id: 1,
    slug: "natura-homem",
    name: "Natura Homem",
    description: "Fragancia masculina sofisticada con notas amaderadas.",
    images: [
      "/products/productos1/Natura_Homem1.jpg",
      "/products/productos1/Natura_Homem2.jpg",
      "/products/productos1/Natura_Homem3.jpg",
    ],
  },
  {
    id: 2,
    slug: "humor-beijo",
    name: "Humor Beijo",
    description: "Aroma dulce y envolvente que transmite conexión y alegría.",
    images: [
      "/products/productos2/Humor_beijo1.jpg",
      "/products/productos2/Humor_beijo2.jpg",
      "/products/productos2/Humor_beijo3.jpg",
    ],
  },
  {
    id: 3,
    slug: "desodorante-antitranspirante",
    name: "Desodorante Antitranspirante",
    description: "Protección efectiva con sensación fresca y natural.",
    images: [
      "/products/productos3/Desodorante_antitranspirante1.jpg",
      "/products/productos3/Desodorante_antitranspirante2.jpg",
      "/products/productos3/Desodorante_antitranspirante3.jpg",
    ],
  },
];

const clothingMen = [
  {
    id: 'm1',
    name: 'Camisa de lino',
    price: 'CLP 19.900',
    image: '/products/productos1/Natura_Homem1.jpg',
    tag: 'Nuevo',
  },
  {
    id: 'm2',
    name: 'Chaqueta premium',
    price: 'CLP 49.900',
    image: '/products/productos2/Humor_beijo1.jpg',
    tag: 'Edición limitada',
  },
  {
    id: 'm3',
    name: 'Pantalón clásico',
    price: 'CLP 29.900',
    image: '/products/productos3/Desodorante_antitranspirante1.jpg',
    tag: 'Básico',
  },
];

const clothingWomen = [
  {
    id: 'w1',
    name: 'Vestido de seda',
    price: 'CLP 29.900',
    image: '/products/productos2/Humor_beijo2.jpg',
    tag: 'Popular',
  },
  {
    id: 'w2',
    name: 'Blusa premium',
    price: 'CLP 24.900',
    image: '/products/productos1/Natura_Homem2.jpg',
    tag: 'Nuevo',
  },
  {
    id: 'w3',
    name: 'Falda midi',
    price: 'CLP 21.900',
    image: '/products/productos3/Desodorante_antitranspirante2.jpg',
    tag: 'Clásico',
  },
];

function ProductCard({ product }: { product: typeof products[number] }) {
  // useState al nivel del componente: válido
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 text-center 
transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Imagen principal */}
      <Link href={`/producto/${product.slug}`}>
      <img
        src={activeImage}
        alt={product.name}
        className="w-full h-56 object-cover rounded-2xl mb-5"
      />
      </Link>

      {/* Miniaturas */}
      <div className="flex justify-center gap-3 mb-4">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`w-14 h-14 overflow-hidden rounded-lg transition focus:outline-none ${
              activeImage === img ? "ring-2 ring-green-700" : "opacity-60 hover:opacity-100"
            }`}
            aria-label={`Ver imagen ${index + 1} de ${product.name}`}
            type="button"
          >
            <img src={img} alt={`${product.name} miniatura ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <Link href={`/producto/${product.slug}`}>
      <h3 className="text-xl font-semibold tracking-wide">{product.name}</h3>
      </Link>

      <p className="text-neutral-500 text-sm mt-1">{product.description}</p>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola 👋, estoy interesado en el producto "${product.name}" de Essenza Nova 🌿. ¿Me brindas más información?`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block border border-green-700 text-green-700 px-6 py-2 rounded-full hover:bg-green-700 hover:text-neutral-600 transition"
      >
        Consultar disponibilidad

      </a>
    </div>
  );
}

export default function Home() {
  const [gender, setGender] = useState<'men' | 'women'>('men');

  return (
    <main className="min-h-screen pt-24 bg-transparent text-[var(--foreground)]">
      
      
      {/* HERO */}
      <section className="-mt-24 w-full relative flex flex-col items-center justify-center min-h-[70vh] px-0 text-center bg-[url('/backgrounds/fondo-regalos.jpeg')] bg-cover bg-center bg-no-repeat">
        {/* overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/30"></div>

        {/* VIDEO HERO */}
          <div className="w-[308px] h-[158px] rounded-3xl overflow-hidden shadow-xl animate-fade-in mb-8 relative z-10">
          <video
            src="/video/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* contenido (sobre el overlay) */}
        <div className="relative z-10 px-6">
          <p className="text-base sm:text-lg md:text-xl leading-7 md:leading-8 max-w-xl mx-auto text-white drop-shadow-md">
            Belleza natural, bienestar y armonía. Productos inspirados en la naturaleza para cuidar y realzar tu esencia.
          </p>

          <a href="#productos" className="mt-8 inline-block bg-[var(--primary)] text-white py-3 px-6 md:px-10 rounded-full text-base md:text-lg shadow-md hover:opacity-90 transition">
            Ver productos
          </a>
        </div>
      </section>

      {/* NUESTRA ESENCIA */}
    <section className="px-6 py-24 bg-white mb-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-neutral-600">
         Nuestra Esencia
        </h2>
        
        <p className="text-neutral-600 leading-relaxed text-lg ">
          En <span className="font-medium text-neutral-800">Essenza Nova</span> creemos
          en la belleza que nace del equilibrio entre la naturaleza, el bienestar y
          lo auténtico. Cada producto ha sido elegido para acompañarte en tu rutina
          diaria, resaltando tu esencia con aromas y sensaciones que conectan contigo.
        </p>
      </div>
    </section>



      {/* PRODUCTOS */}
      <section id="productos" className="text-neutral-900 grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-24 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

     <LanzamientosCarousel />

      
    
     
      {/* ⭐ Nueva sección aquí */}
      <GiftIdeas />


     
  {/* Carrusel de videos (2 videos). El primero es Secuencia1.mp4 */}
      <VideosCarousel />
     
    


      {/* ROPA — sección premium para encargo por WhatsApp */}
      <section className="px-6 py-12 bg-gradient-to-b from-neutral-50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-800">Ropa seleccionada — encárgala por WhatsApp</h2>
              <p className="text-sm text-neutral-500 mt-1">Colección curada para hombre y mujer. Consulta tallas, colores y stock por WhatsApp.</p>
            </div>

            <div className="flex rounded-full bg-white/5 p-1 shadow-sm">
              <button
                onClick={() => setGender('men')}
                className={`px-4 md:px-6 py-2 rounded-full transition text-sm font-medium ${gender === 'men' ? 'bg-white text-neutral-900 shadow' : 'text-neutral-500'}`}
              >
                Hombre
              </button>
              <button
                onClick={() => setGender('women')}
                className={`px-4 md:px-6 py-2 rounded-full transition text-sm font-medium ${gender === 'women' ? 'bg-white text-neutral-900 shadow' : 'text-neutral-500'}`}
              >
                Mujer
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
            {(gender === 'men' ? clothingMen : clothingWomen).map((p) => (
              <div key={p.id} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className="relative h-72 md:h-64 bg-neutral-100 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />

                  {/* price badge */}
                  <div className="absolute top-4 right-4 bg-neutral-900 text-white text-sm px-3 py-1 rounded-full">{p.price}</div>

                  {/* tag */}
                  {p.tag && (
                    <div className="absolute top-4 left-4 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-semibold">
                      {p.tag}
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                    <p className="text-sm text-neutral-500 mb-3">Disponible en tallas <span className="font-medium">S • M • L • XL</span></p>

                    {/* color / material chips (demo) */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block w-8 h-3 rounded-full bg-neutral-300" />
                      <span className="inline-block w-8 h-3 rounded-full bg-yellow-300" />
                      <span className="inline-block w-8 h-3 rounded-full bg-pink-300" />
                      <span className="text-xs text-neutral-500 ml-2">Variantes y colores</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="text-xl font-bold text-neutral-900">{p.price}</div>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Quiero encargar la prenda \"${p.name}\" (ID: ${p.id}). ¿Me confirmas stock y tallas?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm hover:opacity-95 transition"
                    >
                      <img src="/iconos/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
                      Encargar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <WhatsappButton />

      
    </main>
  );
}
