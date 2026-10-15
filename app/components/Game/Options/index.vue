<script setup lang="ts">
import MathUtils from '@/utils/math'
import { useGameStore } from '@/stores/Game'

const GameStore = useGameStore()

const options = ref<number[]>([])
const blockClick = ref(false)
let correctAnswer: number

function generateOptions() {
	const expression = GameStore.expression || ''
	const difficulty = GameStore.difficulty || 1

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

const checkedOptions = ref<Array<boolean | undefined>>([])

function checkCorrect(option: number, index: number) {
	if (blockClick.value) return
	blockClick.value = true
	const isCorrect = option === correctAnswer

	checkedOptions.value = (checkedOptions.value.length === 0 ? Array(options.value.length).fill(undefined) : checkedOptions.value).map(
		(v, i) => (i === index ? isCorrect : v)
	)

	setTimeout(() => {
		GameStore.nextRound(isCorrect)
		checkedOptions.value = []
	}, 1000)
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
		<GameOptionsButton
			v-for="(option, index) in options"
			:key="index"
			:value="option"
			:is-correct="checkedOptions[index]"
			@click="() => checkCorrect(option, index)"
		/>
	</div>
</template>
