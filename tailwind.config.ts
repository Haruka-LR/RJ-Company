/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // <--- Esta línea asegura que detecte tu Navbar
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1A2B3C",    
          primary: "#2563EB", 
          accent: "#10B981",  
          background: "#F8FAFC", 
        },
        slate: {
          800: "#1E293B", 
          600: "#475569", 
        }
      },
    },
  },
  plugins: [],
};