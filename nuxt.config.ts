import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
 future: {
					compatibilityVersion: 4,
	},

 compatibilityDate: '2024-11-01',
 devtools: { enabled: true },

 vite: {
					plugins: [tailwindcss()],
	},

 css: ['~/assets/main.css'],

 typescript: {
					strict: true,
	},

 modules: ['@pinia/nuxt'],
})