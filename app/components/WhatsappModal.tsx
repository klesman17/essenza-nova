"use client";

import { X } from "lucide-react";

export default function WhatsappModal({
  open,
  onClose,
  message,
}: {
  open: boolean;
  onClose: () => void;
  message: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-[90%] max-w-md text-center animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700"
        >
          <X size={22} />
        </button>

        <h3 className="text-2xl font-serif mb-3 text-neutral-900">
          Conversemos por WhatsApp 🌿
        </h3>

        <p className="text-neutral-600 text-sm mb-6">
          Te responderemos en breve para ayudarte.
        </p>

        <a
          href={`https://wa.me/56988934955?text=${encodeURIComponent(message)}`}
          target="_blank"
          className="block bg-green-700 text-neutral-900 py-3 rounded-full font-medium hover:bg-green-800 transition"
        >
          Abrir WhatsApp
        </a>
      </div>
    </div>
  );
}
