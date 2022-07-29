# Pasos para instalar Tailwind con Vite y React

## 1-Vite:

En la terminal de VScode poner: _npm create vite@latest_, elegir el framework y luego poner: _npm install_ para tener los _nodemodules_.

## 2-TailwindCss:

En la terminal, para instalar: _npm install -D tailwindcss postcss autoprefixer_, después _npx tailwindcss init -p_. Siguiente: en el archivo tailwind.config.cjs dentro de **content[]** agregar _'./index.html', './src/\**/*.{js,jsx,ts,tsx}'_.
Luego, en **index.css o main.css** agregar: _@tailwind base;
@tailwind components; tailwind utilities;_

## 3-Levantar servidor:

Con _npm run dev_
