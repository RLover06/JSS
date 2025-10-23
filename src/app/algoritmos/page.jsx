"use client";
import Plot from "react-plotly.js";

export default function Results() {
  const data = {
    wavenumber: [200, 300, 400, 500, 600, 700],
    intensity: [10, 25, 60, 40, 20, 15],
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">Raman results</h1>
      <p className="mb-4 text-gray-600">
      Example of Raman spectrum generated from experimental data.
      </p>
      <Plot
        data={[
          { x: data.wavenumber, y: data.intensity, type: "scatter", mode: "lines+markers" },
        ]}
        layout={{
          title: "Raman Spectrum (Example)",
          xaxis: { title: "Raman frequency (cm⁻¹)" },
          yaxis: { title: "Intensity (u.a.)" },
        }}
      />
    </main>
  );
}
  