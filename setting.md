1. pnpm create vite . --template react-ts
1. pnpm install
1. pnpm add zustand
1. pnpm add -D tailwindcss postcss autoprefixer
1. npx tailwindcss init -p
1. pnpm dev

수정필요
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```