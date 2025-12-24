"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const videos = [
  {
    src: "/video/Secuencia1.mp4",
    poster: "/lanzamientos/tukuma.jpg",
    title: "Secuencia 1",
    text: "Una pieza visual para cerrar la experiencia.",
  },
  {
    src: "/video/fondologo.mp4",
    poster: "/lanzamientos/pulpas-ekos.jpg",
    title: "Secuencia 2",
    text: "Un vistazo adicional en movimiento.",
  },
];

export default function VideosCarousel() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Autoplay carousel (sin pausa automática al hover)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // When index changes, attempt to play the new video (muted autoplay)
  useEffect(() => {
    if (!videoRef.current) return;
    try {
      videoRef.current.pause();
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    } catch (e) {}
  }, [index]);

  return (
    <section
      className="w-full py-4 md:py-8 mt-4 mb-12 md:mb-20"
    >
      <div className="relative w-full px-4 md:px-8">
        <div className="mx-auto w-full max-w-3xl md:max-w-4xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/8 bg-gradient-to-b from-[rgba(140,70,30,0.04)] to-transparent h-[34vh] md:h-[44vh] relative overflow-hidden">
          {videos.map((v, i) => (
            <div key={v.src} className={`absolute inset-0 flex items-center justify-center p-1 md:p-2 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'} transition-opacity duration-700`}>
              <video
                ref={(el) => {
                  if (i === index) videoRef.current = el;
                }}
                src={v.src}
                poster={v.poster}
                preload="metadata"
                autoPlay={i === index}
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-106 rounded-md"
                style={{ objectPosition: 'center' }}
              />
            </div>
          ))}

          {/* text inside frame (bottom-left) */}
          <div className="absolute inset-0 p-3 md:p-5 flex items-end z-20">
            <div className="max-w-2xl text-white">
              <h3 className="text-lg md:text-2xl font-serif mb-1 drop-shadow">{videos[index].title}</h3>
              <p className="text-sm md:text-base opacity-95 drop-shadow">{videos[index].text}</p>
            </div>
          </div>

          {/* subtle decorative frame */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/12" />
        </div>
        {/* subtle backdrop so the page looks premium */}
        <div className="absolute left-0 right-0 top-0 h-4 md:h-6 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.02)] pointer-events-none" />

        {/* dots for desktop (inside frame) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-30 hidden md:flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir al video ${i + 1}`}
              className={`w-4 h-4 md:w-3 md:h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>

        {/* dots for mobile (below frame) */}
        <div className="flex md:hidden justify-center mt-3 gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir al video ${i + 1}`}
              className={`w-4 h-4 md:w-3 md:h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
