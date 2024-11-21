/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,flowbite}'],
	theme: {
		extend: {
			colors:{
				'greenm': '#9ce630'
			}
		},
	},
	plugins: [require('flowbite/plugin')],
}
