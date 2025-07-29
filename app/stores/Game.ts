import { defineStore } from 'pinia'

import MathUtils from '@/utils/math'

export const useGameStore = defineStore('Game', () => {
	const expression = ref('')

	const difficulty = ref(1)

	function startRound(options: { difficulty?: number } = {}) {
		if (options.difficulty !== undefined && options.difficulty >= 1) {
			difficulty.value = options.difficulty
		}

		expression.value = MathUtils.generateMathExpression(difficulty.value)
	}

	return {
		expression: readonly(expression),
		difficulty: readonly(difficulty),

		startRound,
	}
})
