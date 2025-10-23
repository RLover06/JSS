"use client";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Tesis() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600"> MATLAB Thesis </h1>
      <div className="h-[85vh] border rounded-lg shadow">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
          <Viewer fileUrl="/OverRegino.pdf" />
        </Worker>
      </div>
    </main>
  );
}
