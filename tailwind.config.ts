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
				background: 'var(--color-background)',
				button: 'var(--color-button)',
				accent: 'var(--color-accent)',
				primary: 'var(--color-text)',
			},
		},
	},
	plugins: [],
}
