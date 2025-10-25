"use client";
import React from "react";

export default function AlgoritmosPage() {
  return (
    <main className="flex flex-col items-center px-8 py-12 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Algoritmos en MATLAB
      </h1>

      {/* --- ALGORITMO 1 --- */}
      <section className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Algoritmo 1: Lectura y graficación de archivos Raman
        </h2>

        {/* Diagrama textual */}
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-md text-sm leading-relaxed mb-6">
          <p>🔹 <strong>Inicio</strong></p>
          <p>⬇️ Definir carpeta de archivos</p>
          <p>⬇️ Buscar archivos *.txt tipo ZnO</p>
          <p>🔸 ¿Se encontraron archivos?</p>
          <ul className="ml-6 list-disc">
            <li>No → ERROR: No se encontraron archivos</li>
            <li>Sí → Crear figura y configurar ejes</li>
          </ul>
          <p>⬇️ Iterar sobre cada archivo</p>
          <p>⬇️ Leer datos del archivo</p>
          <p>🔸 ¿Al menos 2 columnas?</p>
          <ul className="ml-6 list-disc">
            <li>No → ADVERTENCIA: Archivo omitido</li>
            <li>Sí → Extraer Raman e intensidad</li>
          </ul>
          <p>⬇️ Graficar con nombre del archivo</p>
          <p>🔹 <strong>Fin</strong></p>
        </div>

        <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-x-auto">
{`% --- Algoritmo 1: Lectura y graficación de archivos Raman ---
clear; clc; close all;

carpeta = uigetdir(pwd, 'Selecciona la carpeta con archivos ZnO');
archivos = dir(fullfile(carpeta, '*ZnO*.txt'));

if isempty(archivos)
    error('No se encontraron archivos .txt tipo ZnO en la carpeta seleccionada.');
end

figure; hold on; grid on;
xlabel('Desplazamiento Raman (cm^{-1})');
ylabel('Intensidad (u.a.)');
title('Espectros Raman de ZnO');

for k = 1:length(archivos)
    ruta = fullfile(archivos(k).folder, archivos(k).name);
    datos = readmatrix(ruta);

    if size(datos,2) < 2
        warning('Archivo %s omitido: menos de dos columnas.', archivos(k).name);
        continue;
    end

    raman = datos(:,1);
    intensidad = datos(:,2);
    plot(raman, intensidad, 'DisplayName', archivos(k).name);
end

legend('Location','best');
hold off;`}
        </pre>
      </section>

      {/* --- ALGORITMO 2 --- */}
      <section className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Algoritmo 2: Ajuste Pseudo-Voigt de picos Raman
        </h2>

        <div className="bg-gray-50 border-l-4 border-green-500 p-4 rounded-md text-sm leading-relaxed mb-6">
          <p>🔹 <strong>Inicio</strong></p>
          <p>⬇️ Cargar datos Raman e intensidad</p>
          <p>⬇️ Definir parámetros iniciales de picos (centro, amplitud, FWHM, eta)</p>
          <p>⬇️ Calcular función pseudo-Voigt teórica</p>
          <p>⬇️ Ajustar curva con método <code>lsqcurvefit</code></p>
          <p>⬇️ Obtener parámetros ajustados</p>
          <p>⬇️ Calcular FWHM ajustado</p>
          <p>⬇️ Mostrar ajuste y residuales</p>
          <p>🔹 <strong>Fin</strong></p>
        </div>

        <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-x-auto">
{`% --- Algoritmo 2: Ajuste Pseudo-Voigt de picos Raman ---
clear; clc; close all;

load('espectroZnO.mat'); % contiene variables raman, intensidad

% Definir parámetros teóricos
centros_teo = [99, 437, 581, 660]; % cm^-1
fwhm_teo = [3, 5, 8, 10];
eta0 = 0.5; % mezcla inicial (Lorentz/Gauss)

% Parámetros iniciales
x0 = [centros_teo, fwhm_teo, repmat(eta0,1,length(centros_teo))];

% Definir función pseudo-Voigt
pseudoVoigt = @(x, xdata) ...
    sum(arrayfun(@(i) ...
        x(i+length(centros_teo)) * ...
        ((1-x(2*length(centros_teo)+i))*exp(-4*log(2)*((xdata-x(i))/x(i+3*length(centros_teo))).^2) + ...
        x(2*length(centros_teo)+i)*(1./(1+((xdata-x(i))/x(i+3*length(centros_teo))).^2))), ...
    1:length(centros_teo)));

% Ajuste no lineal
options = optimset('Display','off');
xajustado = lsqcurvefit(@(x,xdata) pseudoVoigt(x,xdata), x0, raman, intensidad, [], [], options);

% Mostrar resultados
plot(raman, intensidad, 'k'); hold on;
plot(raman, pseudoVoigt(xajustado, raman), 'r', 'LineWidth', 1.2);
legend('Experimental','Ajuste Pseudo-Voigt');
xlabel('Raman (cm^{-1})'); ylabel('Intensidad (u.a.)');
title('Ajuste Pseudo-Voigt - ZnO');`}
        </pre>
      </section>

      {/* --- ALGORITMO 3 --- */}
      <section className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Algoritmo 3: Exportación de resultados a Excel
        </h2>

        <div className="bg-gray-50 border-l-4 border-yellow-500 p-4 rounded-md text-sm leading-relaxed mb-6">
          <p>🔹 <strong>Inicio</strong></p>
          <p>⬇️ Recibir parámetros ajustados del algoritmo 2</p>
          <p>⬇️ Crear tabla con columnas:</p>
          <ul className="ml-6 list-disc">
            <li>Centro teórico / ajustado</li>
            <li>Sigma, Gamma, Eta</li>
            <li>Amplitud, Área, FWHM</li>
          </ul>
          <p>⬇️ Escribir tabla a archivo Excel</p>
          <p>⬇️ Mostrar confirmación de guardado</p>
          <p>🔹 <strong>Fin</strong></p>
        </div>

        <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded-lg overflow-x-auto">
{`% --- Algoritmo 3: Exportación de resultados a Excel ---
clear; clc;

% Ejemplo de resultados simulados
centro_teo = [99, 437, 581, 660]';
centro_ajus = [98.9, 437.2, 580.5, 659.8]';
sigma = [1.2, 2.0, 2.5, 3.1]';
gamma = [1.0, 1.8, 2.3, 2.8]';
eta = [0.45, 0.52, 0.60, 0.55]';
amplitud = [250, 800, 500, 300]';
area = amplitud .* (sigma + gamma);
fwhm_exp = [3, 5, 8, 10]';
fwhm_ajus = 2*(sigma + gamma);

T = table(centro_teo, centro_ajus, sigma, gamma, eta, amplitud, area, fwhm_exp, fwhm_ajus);

% Exportar a Excel
nombreArchivo = 'Resultados_Ajuste_ZnO.xlsx';
writetable(T, nombreArchivo);

disp(['✅ Resultados exportados a ', nombreArchivo]);`}
        </pre>
      </section>
    </main>
  );
}
