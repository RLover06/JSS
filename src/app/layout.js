import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Raman Spectroscopy Portfolio - Over Regino",
  description: "Raman analysis of cerium-doped ZnO - MATLAB Thesis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        {/* Menú de navegación */}
        <nav className="flex justify-center gap-6 p-4 bg-white shadow sticky top-0 z-10">
          <Link href="/" className="font-semibold hover:text-blue-600">Start</Link>
          <Link href="/algoritmos" className="hover:text-blue-600">Algorithms</Link>
          <Link href="/resultados" className="hover:text-blue-600">Results</Link>
          <Link href="/tesis" className="hover:text-blue-600">Thesis</Link>
        </nav>

        {/* Contenido dinámico */}
        <main className="p-6 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
