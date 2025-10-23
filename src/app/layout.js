import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Portafolio de espectroscopia Raman - Over Regino",
  description: "Análisis Raman de ZnO dopado con cerio - Tesis MATLAB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        {/* Menú de navegación */}
        <nav className="flex justify-center gap-6 p-4 bg-white shadow sticky top-0 z-10">
          <Link href="/" className="font-semibold hover:text-blue-600">Inicio</Link>
          <Link href="/algoritmos" className="hover:text-blue-600">Algoritmos</Link>
          <Link href="/resultados" className="hover:text-blue-600">Resultados</Link>
          <Link href="/tesis" className="hover:text-blue-600">Tesis</Link>
        </nav>

        {/* Contenido dinámico */}
        <main className="p-6 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
