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

vanta and three:

`npm i vanta`
`npm i three@0.122.0`
`https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js`
`npm i --save-dev @types/vanta`
`npm i --save-dev @types/three`
create file named vanta.d.ts and insert: `declare module "vanta/dist/vanta.birds.min";`

React three fiber:
`npm install three @types/three @react-three/fiber`
WARNING: the following is currently build in to next after version 13.1 {

It should work out of the box but you will encounter untranspiled add-ons in the three.js ecosystem, in that case you can install the next-transpile-modules module:
`npm install next-transpile-modules --save-dev`

Then, add this to your next.config.js

`const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()`
}

<!--  -->
<!--  -->
<!--  -->

drei:
`npm install @react-three/drei`
use-cannon:
`npm i @react-three/cannon`
