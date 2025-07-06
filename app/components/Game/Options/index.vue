<script setup lang="ts">
import MathUtils from '@/utils/math'
import { useGameStore } from '~/stores/Game'

const GameStore = useGameStore()

const emit = defineEmits<{
	(e: 'checkCorrect', option: number): void
}>()

const options = ref<number[]>([])

function generateOptions() {
	const expression = GameStore.expression
	const difficulty = GameStore.difficulty

	if (expression === '') return

	const correctAnswer = MathUtils.calculateExpression(expression)
	const optionsSet = new Set<number>()
	optionsSet.add(correctAnswer)

	console.log('Start options generation')
	while (optionsSet.size < 4) {
		const perturbationRange = correctAnswer === 0 ? 2 / difficulty : (correctAnswer / difficulty) * 1.5

		const range = MathUtils.getDistractionRange(correctAnswer, difficulty)

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
	console.log('End options generation')

	options.value = Array.from(optionsSet).sort(() => Math.random() - 0.5)

	console.log('startTimer')
}

function checkCorrect(option?: number) {
	let rightAnswer = false

	if (option) {
		const expressionResult = MathUtils.calculateExpression(GameStore.expression)
		console.log(expressionResult)

		rightAnswer = option === expressionResult
	}

	if (rightAnswer) {
		console.log('Correct!')
	} else {
		console.log('Wrong!')
	}

	GameStore.startRound()
}

watch(
	() => GameStore.expression,
	newValue => {
		console.log('Expression changed:', newValue)
		if (newValue) generateOptions()
	}
)
</script>

<template>
	<div class="grid grid-cols-2 grid-rows-2 gap-4 w-full">
		<GameOptionsButton v-for="option in options" :index="option" :value="option" @click="() => checkCorrect(option)" />
	</div>
</template>
