"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm border-b border-neutral-200/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-3 h-[40px] w-auto">
  <Image src="/logone.png" width={242} height={42} alt="Essenza Nova" />

</div>
        </Link>

        {/* BOTÓN WHATSAPP */}
        <a
          href="https://wa.me/56988934955"
          target="_blank"
          className="bg-green-700 text-white px-5 py-2 rounded-full text-sm hover:bg-green-800 transition shadow-sm"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}

