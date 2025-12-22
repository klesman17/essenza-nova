"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import WhatsappModal from "./WhatsappModal";

export default function WhatsappButton() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 👉 Detectar si está en un producto
  let message =
    "Hola 👋, quisiera más información sobre los productos de Essenza Nova 🌿";

  if (pathname.startsWith("/producto/")) {
    const slug = pathname.split("/producto/")[1];

    const productName = slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    message = `Hola 👋, me interesa el producto *${productName}* de Essenza Nova 🌿. ¿Podrías darme más información?`;
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-xl bg-green-600 hover:bg-green-700 transition flex items-center justify-center group"
      >
        <span className="text-neutral-900 text-2xl">💬</span>

        <span
          className="
            absolute right-16 top-1/2 -translate-y-1/2
            px-5 py-2 rounded-2xl text-sm text-neutral-900
            bg-white/20 backdrop-blur-xl border border-white/30
            shadow-xl
            opacity-0 translate-x-2 scale-95
            transition-all duration-300
            group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
            whitespace-nowrap
          "
        >
          Escríbenos 💚
        </span>
      </button>

      {/* Modal */}
      <WhatsappModal
        open={open}
        onClose={() => setOpen(false)}
        message={message}
      />
    </>
  );
}
