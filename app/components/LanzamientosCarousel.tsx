"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    imageDesktop: "/lanzamientos/tukuma.jpg",
    imageMobile: "/lanzamientos/ekos-tukuma_MOB.jpg",
    title: "Tukumá – Potencia Antiseñales",
    text:
      "Hidrata y rellena las capas más profundas de la piel, con resultados de 2× más producción de ácido hialurónico.",
    button: "Quiero conocerlo",
    href: "/lanzamiento/tukuma",
    date: "12 Dic",
  },
  {
    imageDesktop: "/lanzamientos/pulpas-ekos.jpg",
    imageMobile: "/lanzamientos/pulpas-ekos_MOB.jpg",
    title: "La potencia de la Amazonía en tus manos",
    text:
      "Experimenta una piel más suave e hidratada con nuestras pulpas para manos de Ekos.",
    button: "Ver colección",
    href: "/coleccion/ekos",
    date: "18 Nov",
  },
];


export default function LanzamientosCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 6000); // 5 segundos

  return () => clearInterval(interval);
}, []);


  const next = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-[620px] md:h-[420px] overflow-hidden mt-32">
 
     <div
  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
  style={{
    backgroundImage: `url(${
      typeof window !== "undefined" && window.innerWidth < 768
        ? slides[index].imageMobile
        : slides[index].imageDesktop
    }
    )`,
    
  }}
/>



      <div className="relative z-10 max-w-6xl h-full flex items-center 
px-6 md:px-0 md:ml-16 items-end md:items-center px-6 pb-10 md:pb-0">
  <div className="max-w-xl text-white text-left md:text-left">
    <h2 className="text-3xl md:text-5xl font-serif mb-3">
      {slides[index].title}
    </h2>

    <p className="text-base md:text-lg opacity-90 mb-6">
      {slides[index].text}
    </p>

    <Link
      href={slides[index].href}
      className="inline-block bg-green-700 px-7 py-3 rounded-full text-white font-medium hover:bg-green-800 transition"
    >
      {slides[index].button}
    </Link>
  </div>
</div>


      <button
        onClick={next}
        aria-label="Siguiente slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white shadow"
      >
        <img src="/iconos/flechad.png" alt="Siguiente" className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </section>
  );
}
