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

	css: ['@/assets/main.css'],

	modules: ['@pinia/nuxt', '@nuxt/test-utils/module', '@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxt/fonts'],
})
