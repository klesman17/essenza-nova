import { Instagram, Facebook, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-neutral-600">
        
        {/* MARCA */}
        <div>
          <h3 className="text-xl font-serif text-neutral-900 mb-3">
            Essenza Nova
          </h3>
          <p className="leading-relaxed max-w-sm">
            Belleza natural, bienestar y armonía.  
            Productos inspirados en la naturaleza para cuidar tu piel y tu esencia.
          </p>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-neutral-900 font-medium mb-4">
            Contacto
          </h4>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Phone size={16} />
              <span>+51 900 000 000</span>
            </li>
            <li>📧 contacto@essenzanova.com</li>
            <li>📍 Perú</li>
          </ul>
        </div>

        {/* REDES */}
        <div>
          <h4 className="text-neutral-900 font-medium mb-4">
            Síguenos
          </h4>

          <div className="flex gap-4">
            <a className="hover:text-green-700 transition cursor-pointer">
              <Instagram size={20} />
            </a>
            <a className="hover:text-green-700 transition cursor-pointer">
              <Facebook size={20} />
            </a>
            <a className="hover:text-green-700 transition cursor-pointer">
              <Phone size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-neutral-200/60 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Essenza Nova. Todos los derechos reservados.
      </div>
    </footer>
  );
}
