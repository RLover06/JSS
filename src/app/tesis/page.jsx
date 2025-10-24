"use client";

export default function ThesisPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        Full Thesis Document
      </h1>

      <iframe
        src="/OverRegino.pdf"
        width="80%"
        height="700px"
        className="rounded-lg shadow-lg border border-gray-700"
      ></iframe>

      <p className="text-gray-400 mt-4 text-sm">
        You can read the complete PDF document of the research directly above.
      </p>
    </div>
  );
}
