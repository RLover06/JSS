"use client";
import Plot from "react-plotly.js";

export default function Resultados() {
  const data = {
    wavenumber: [200, 300, 400, 500, 600, 700],
    intensity: [10, 25, 60, 40, 20, 15],
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">Resultados Raman</h1>
      <p className="mb-4 text-gray-600">
        Ejemplo de espectro Raman generado a partir de datos experimentales.
      </p>
      <Plot
        data={[
          { x: data.wavenumber, y: data.intensity, type: "scatter", mode: "lines+markers" },
        ]}
        layout={{
          title: "Espectro Raman (Ejemplo)",
          xaxis: { title: "Frecuencia Raman (cm⁻¹)" },
          yaxis: { title: "Intensidad (u.a.)" },
        }}
      />
    </main>
  );
}
  