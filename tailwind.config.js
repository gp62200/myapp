/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradient-to-45': 
          'linear-gradient(135deg, #ff3860 5%,#fff 90%, #ffed4a 5%)',
      'gradient-to-135': 
          'linear-gradient(135deg, #ffed4a, #ff3860)',
      },
     
    },
  },
  plugins: [],
};
