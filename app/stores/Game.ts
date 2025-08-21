import { defineStore } from 'pinia'

import GameMode from '@/constants/GameMode'

import MathUtils from '@/utils/math'

export const useGameStore = defineStore('Game', () => {
	const expression = ref('')

	const difficulty = ref(1)
	const mode = ref<GameMode>(GameMode.TimeTrial)
	const score = ref(0)

	function startMatch(options: { difficulty: number; mode: GameMode }) {
		difficulty.value = options.difficulty
		mode.value = options.mode

		resetScore()

		expression.value = MathUtils.generateMathExpression(difficulty.value)
	}

	function nextRound(isCorrect: boolean = true) {
		if (isCorrect) {
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
		expression: computed(() => expression.value),
		difficulty: computed(() => difficulty.value),
		score: computed(() => score.value),
		mode: computed(() => mode.value),

		startMatch,
		nextRound,
		addScore,
	}
})
