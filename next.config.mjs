/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: import.meta.dirname, // Define la raíz correcta
    reactStrictMode: true, // Recomendado para detectar errores en desarrollo
    swcMinify: true,       // Usa el compilador SWC para minificar (más rápido)
  };
  
  export default nextConfig;
  