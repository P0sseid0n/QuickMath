import { defineStore } from 'pinia'

import MathUtils from '@/utils/math'

export const useGameStore = defineStore('Game', () => {
	const expression = ref('')

	const difficulty = ref(1)

	const score = ref(0)

	function startRound(options: { difficulty?: number; isCorrect?: boolean } = {}) {
		if (options.difficulty !== undefined && options.difficulty >= 1) {
			difficulty.value = options.difficulty
		}

		if (options.isCorrect === true) {
			addScore()
		}

		expression.value = MathUtils.generateMathExpression(difficulty.value)
	}

	function addScore(points: number = 10) {
		score.value += points
	}

	function resetScore() {
		score.value = 0
	}

	return {
		expression: readonly(expression),
		difficulty: readonly(difficulty),
		score: readonly(score),

		startRound,
		resetScore,
	}
})
