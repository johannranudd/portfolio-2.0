1. `npx create-next-app@latest --typescript .`
2. `npm install -D tailwindcss postcss autoprefixer`
3. `npx tailwindcss init -p`

add to tailwind.config.js:

```
content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
```

add to globals.css and restart vscode

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

create color theme:

`npm i next-themes`
`npm i react-icons`
`npm i sharp` ?????

framer motion:

`npm install framer-motion`

three:
`npm install three @types/three @react-three/fiber`
drei:
`npm install @react-three/drei`
react-intersection-observer:
`npm i react-intersection-observer`

mobile dev:
`chrome://inspect/#devices`
