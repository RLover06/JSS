"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Importa react-plotly.js dinámicamente para evitar errores SSR
const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

export default function ResultadosPage() {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});

  useEffect(() => {
    // Ejemplo: puedes reemplazar esto con tus datos reales o un fetch()
    setData([
      {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "blue" },
        name: "Datos experimentales",
      },
      {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: "bar",
        name: "Datos teóricos",
      },
    ]);

    setLayout({
      title: "Resultados del Análisis Raman",
      xaxis: { title: "Número de modo" },
      yaxis: { title: "Intensidad (u.a.)" },
      autosize: true,
      plot_bgcolor: "#fafafa",
      paper_bgcolor: "#fff",
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Resultados del Ajuste Raman
      </h1>

      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-4">
        <Plot
          data={data}
          layout={layout}
          useResizeHandler
          style={{ width: "100%", height: "100%" }}
          config={{ responsive: true }}
        />
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Estos resultados muestran el comportamiento espectral ajustado de las muestras ZnO.
      </p>
    </main>
  );
}
