"use client";
import Plot from "react-plotly.js";

export default function Results() {
  // 🔹 Datos de ejemplo — aquí luego puedes cargar tus datos reales desde un CSV o JSON
  const data = {
    wavenumber: [200, 300, 400, 500, 600, 700],
    intensity: [15, 45, 80, 60, 30, 20],
  };

  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">Raman results</h1>
      <p className="text-gray-600 mb-6">
      This graph shows an example Raman spectrum of cerium-doped ZnO.
      </p>

      <div className="flex justify-center">
        <Plot
          data={[
            {
              x: data.wavenumber,
              y: data.intensity,
              type: "scatter",
              mode: "lines+markers",
              marker: { size: 6 },
            },
          ]}
          layout={{
            width: 700,
            height: 400,
            title: "Raman Spectrum (Example)",
            xaxis: { title: "Wavenumber (cm⁻¹)" },
            yaxis: { title: "Intensity (u.a.)" },
          }}
        />
      </div>
    </main>
  );
}
