"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Cargamos Plotly dinámicamente solo en el cliente
const PlotlyChart = dynamic(
  () =>
    import("react-plotly.js").then((mod) => {
      const Plot = mod.default;
      return function PlotlyChart() {
        const data = [
          {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
          {
            x: [1, 2, 3, 4],
            y: [16, 5, 11, 9],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ];

        const layout = {
          title: "Visualización de Algoritmos",
          xaxis: { title: "Eje X" },
          yaxis: { title: "Eje Y" },
          autosize: true,
        };

        return (
          <div className="w-full h-[500px]">
            <Plot data={data} layout={layout} style={{ width: "100%", height: "100%" }} />
          </div>
        );
      };
    }),
  { ssr: false }
);

export default function AlgoritmosPage() {
  return (
    <main className="p-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Gráficas Interactivas de Algoritmos
      </h1>
      <Suspense fallback={<div>Cargando gráfico...</div>}>
        <PlotlyChart />
      </Suspense>
    </main>
  );
}
