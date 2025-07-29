<script setup lang="ts">
import MathUtils from '@/utils/math'
import { useGameStore } from '~/stores/Game'

const GameStore = useGameStore()

const options = ref<number[]>([])
const blockClick = ref(false)
let correctAnswer: number

function generateOptions() {
	const expression = GameStore.expression
	const difficulty = GameStore.difficulty

	if (expression === '') return
	options.value = []

	correctAnswer = MathUtils.calculateExpression(expression)
	const optionsSet = new Set<number>()
	optionsSet.add(correctAnswer)

	while (optionsSet.size < 4) {
		const perturbationRange = MathUtils.getPerturbationRange(correctAnswer, difficulty)

		let perturbation = 0

		if (Number.isInteger(correctAnswer)) {
			perturbation = Math.floor(Math.random() * (perturbationRange * 2 + 1)) - perturbationRange
		} else {
			perturbation = Math.random() * (perturbationRange * 2) - perturbationRange
		}

		let distractor = correctAnswer + perturbation

		if (Number.isInteger(correctAnswer)) {
			distractor = Math.round(distractor)
		} else {
			distractor = Math.round(distractor * 100) / 100
		}

		if (distractor === correctAnswer) continue

		optionsSet.add(distractor)
	}

	options.value = Array.from(optionsSet).sort(() => Math.random() - 0.5)
	blockClick.value = false
}

function checkCorrect(option: number) {
	if (blockClick.value) return
	blockClick.value = true
	const rightAnswer = option === correctAnswer

	if (rightAnswer) {
		console.log('Correct!')
	} else {
		console.log('Wrong!')
	}

	GameStore.startRound()
}

watch(
	() => GameStore.expression,
	(newValue, oldValue) => {
		if (newValue !== oldValue) {
			generateOptions()
		}
	},
	{ immediate: true }
)
</script>

<template>
	<div id="Options" class="grid grid-cols-2 grid-rows-2 gap-4 w-full">
		<GameOptionsButton v-for="option in options" :key="option" :value="option" @click="() => checkCorrect(option)" />
	</div>
</template>
