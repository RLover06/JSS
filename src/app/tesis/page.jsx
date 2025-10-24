"use client";
import React from "react";

export default function Thesis() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold text-blue-400 mb-6">
        Full Thesis Document
      </h1>
      <iframe
        src="/OverRegino.pdf"
        className="w-full max-w-4xl h-[80vh] border-2 border-gray-700 rounded-xl"
      />
      <p className="text-sm text-gray-400 mt-4">
        You can read the complete PDF document of the research directly above.
      </p>
    </div>
  );
}
