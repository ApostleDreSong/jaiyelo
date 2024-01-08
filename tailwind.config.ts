import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFFFFF",
				sec: {
					100: "#000",
					200: "#787878",
					300: "#2F2F2F",
					400: "#151515",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				bg1: "url('/assets/images/background-1.png')",
			},
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "2rem",
					xl: "2rem",
					"2xl": "8.75rem",
				},
				center: true,
			},
			screens: {
				xs: "414px",
				sm: "640px",
				md: "720px",
				lg: "1000px",
				"lg-max": { max: "960px" },
				xl: "1140px",
				"2xl": "1440px",
				"3xl": "1441px",
				"4xl": "2000px",
			},
		},
	},
	plugins: [],
};
export default config;
