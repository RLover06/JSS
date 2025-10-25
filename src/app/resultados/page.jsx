"use client";
import React from "react";
import Image from "next/image";

const grupos = [
  {
    titulo: "BZCe — Muestras 1 a 5",
    imagenes: ["BZCe1.png", "BZCe2.png", "BZCe3.png", "BZCe4.png", "BZCe5.png"],
  },
  {
    titulo: "BZnO — Espectro de referencia",
    imagenes: ["BZnO.png"],
  },
  {
    titulo: "E_ZnO — Espectro puro de ZnO",
    imagenes: ["E_ZnO.png"],
  },
  {
    titulo: "PZCe — Muestras 1 a 5",
    imagenes: ["PZCe1.jpg", "PZCe2.jpg", "PZCe3.jpg", "PZCe4.jpg", "PZCe5.jpg"],
  },
  {
    titulo: "ZCe — Muestras 1 a 5",
    imagenes: ["CZNO1.png", "ZCe2.png", "ZCe3.png", "ZCe4.png", "ZCe5.jpg"],
  },
  {
    titulo: "ZO — Muestras de ZnO modificadas",
    imagenes: ["zoozce.png", "zoozce1.png", "zoozno.png", "zoozno1.png"],
  },
  {
    titulo: "LN — Diagramas o resultados complementarios",
    imagenes: ["LN1.jpg", "LN2.jpg", "LN3.jpg", "LN4.jpg", "LN5.jpg", "LN6.jpg"],
  },
];

export default function ResultadosPage() {
  return (
    <main className="flex flex-col items-center px-8 py-12 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Resultados del Análisis Raman
      </h1>

      {grupos.map((grupo, i) => (
        <section
          key={i}
          className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {grupo.titulo}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grupo.imagenes.map((img, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-2 flex flex-col items-center"
              >
                <Image
                  src={`/resultados/${img}`}
                  alt={img}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-sm"
                />
                <p className="text-gray-600 text-sm mt-2">{img}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
