export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f5f0] text-[#2f2e2c]">
      <section className="flex flex-col items-center py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Essenza <span className="text-green-700">Nova</span>
        </h1>
        <p className="text-lg max-w-xl text-gray-700">
          Belleza natural, bienestar y armonía. Productos inspirados en la
          naturaleza para cuidar tu piel y tu esencia.
        </p>

        <button className="mt-10 bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full text-lg shadow-lg transition">
          Ver Productos
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-20">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow p-6 flex flex-col items-center"
          >
            <div className="h-40 w-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold">Producto {i}</h3>
            <p className="text-gray-500 text-sm mt-2">
              Descripción corta del producto.
            </p>
            <a
              href="https://wa.me/51900000000"
              className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
            >
              Comprar por WhatsApp
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
