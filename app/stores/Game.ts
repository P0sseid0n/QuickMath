import { defineStore } from 'pinia'

import MathUtils from '@/utils/math'

export const useGameStore = defineStore('Game', () => {
	const expression = ref('')

	const difficulty = ref(1)

	function startRound() {
		console.log('Starting new round with difficulty:', difficulty.value)
		expression.value = MathUtils.generateMathExpression(difficulty.value)
		console.log('Generated expression:', expression.value)
	}

	return {
		expression: readonly(expression),
		difficulty: readonly(difficulty),

		startRound,
	}
})
