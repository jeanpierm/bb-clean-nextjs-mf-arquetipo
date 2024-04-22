# BB Clean Architecture - NextJS - Module Federation

Ejemplo de Module Federation (MicroFrontend) con NextJS y Clean Architecture.

## Tecnologías

- Module Federation NextJS Plugin v8
- NextJS v14
- React v18
- Zustand v4 (Gestor de estados)
- Webpack v5
- TypeScript v5
- NodeJS v20

## Iniciar proyecto

```bash
# 1. (abrir una nueva terminal en la raíz del proyecto)
# 2. ubicarse en micro #1
cd container-app

# 3. instalar dependencias
npm install

# 4. levantar micro #2 (desarrollo)
npm run dev

# 5. (abrir una nueva terminal en la raíz del proyecto)
# 6. ubicarse en micro #2
cd geo-app

# 7. instalar dependencias
npm install

# 8. levantar micro #2 (desarrollo)
npm run dev
```

Enlaces:

- Página principal de micro #1 con componentes y comunicación de datos (a través de custom events) con micro #2: <http://localhost:3000/>
- Página remota de micro #2 en micro #1: <http://localhost:3000/provinces>
- Página de micro #1 con componentes y comunicación de datos (a través de store de estados (zustand)) con micro #2: <http://localhost:3000/search-province>
