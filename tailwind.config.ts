export default {
	content: [
		'./app/**/*.{js,vue,ts}',
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--color-background) / <alpha-value>)',
				button: 'rgb(var(--color-button) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				danger: 'rgb(var(--color-danger) / <alpha-value>)',
				primary: 'rgb(var(--color-text) / <alpha-value>)',
			},
		},
	},
	plugins: [],
}
