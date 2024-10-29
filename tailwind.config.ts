import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				'background-alt': 'var(--background-alt)',
				foreground: 'var(--foreground)',
				'foreground-light': 'var(--foreground-light)',
			},
			fontFamily: {
				geist: ['var(--font-geist)'],
				'space-grotest': ['var(--font-space-grotest)'],
			},
		},
	},
	plugins: [],
}
export default config
