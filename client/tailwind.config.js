/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				cinzel: ["Cinzel", "serif"],
				exo2: ["Exo 2", "sans-serif"],
			},
			colors: {
				primary: "#ebf2fa",
				secondary: "#cae9ff",
				logo: "#008bf8",
			},
		},
	},
	plugins: [],
};
