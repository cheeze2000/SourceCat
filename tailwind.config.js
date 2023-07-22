import { createThemes } from "tw-colors";

/** @type {import("tailwindcss").Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.tsx",
	],
	theme: {
		extend: {},
	},
	plugins: [
		createThemes({
			dark: {
				"primary": "#282c34",
				"secondary": "#abb2bf",
			},
		}),
	],
};
