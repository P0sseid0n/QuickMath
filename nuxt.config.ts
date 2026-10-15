export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	typescript: {
		strict: true,
	},

	routeRules: {
		'/game': { ssr: false },
		'/': { swr: true },
	},

	app: {
		head: {
			htmlAttrs: { lang: 'en' },
			title: 'QuickMath',
			meta: [
				{ name: 'description', content: 'Solve arithmetic expressions against the clock and pick the right answer before time runs out.' },
				{ name: 'theme-color', content: '#151412' },
				{ property: 'og:title', content: 'QuickMath' },
				{ property: 'og:description', content: 'Solve arithmetic expressions against the clock.' },
			],
		},
	},

	css: ['@/assets/main.css'],

	modules: ['@pinia/nuxt', '@nuxt/test-utils/module', '@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxt/fonts'],
})
