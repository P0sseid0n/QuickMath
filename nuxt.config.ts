export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4,
	},

	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	typescript: {
		strict: true,
	},

	css: ['@/assets/main.css'],

	modules: ['@pinia/nuxt', '@nuxt/test-utils/module', '@nuxt/icon', '@nuxtjs/tailwindcss'],
})
