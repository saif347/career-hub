/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
}

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'primary':  'linear-gradient(90deg, #7E90FE, #9873FF))',
//       },
//     }
//   }
// }

