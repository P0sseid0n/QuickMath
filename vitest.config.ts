import { defineConfig } from 'vitest/config'
import { defineVitestProject } from '@nuxt/test-utils/config'

export default defineConfig({
	test: {
		projects: [
			await defineVitestProject({
				// Lógica pura: roda em Node, mas com os auto-imports do Nuxt
				test: {
					name: 'unit',
					include: ['app/**/*.test.ts'],
					exclude: ['app/**/*.nuxt.test.ts'],
					environment: 'node',
				},
			}),
			await defineVitestProject({
				// Componentes: roda no ambiente do Nuxt
				test: {
					name: 'nuxt',
					include: ['app/**/*.nuxt.test.ts'],
					environment: 'nuxt',
				},
			}),
		],
	},
})
