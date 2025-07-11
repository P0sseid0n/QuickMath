import { defineStore } from 'pinia'

import MathUtils from '@/utils/math'

export const useGameStore = defineStore('Game', () => {
	const expression = ref('')

	const difficulty = ref(1)

	function startRound() {
		expression.value = MathUtils.generateMathExpression(difficulty.value)
	}

	return {
		expression: readonly(expression),
		difficulty: readonly(difficulty),

		startRound,
	}
})
