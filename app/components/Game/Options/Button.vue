<script setup lang="ts">
const props = defineProps<{
	value: number
	isCorrect?: boolean
}>()

function formatOption(option: number): string {
	if (Number.isInteger(option)) {
		return option.toString()
	} else {
		return option.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
	}
}

const buttonClasses = computed(() => {
	if (props.isCorrect === true) return 'bg-white text-black'
	if (props.isCorrect === false) return 'bg-button opacity-50'

	return 'bg-button hover:bg-opacity-0'
})
</script>

<template>
	<button class="w-full transition-all duration-300 rounded-2xl py-6" :class="buttonClasses">
		<p class="text-2xl transition-colors duration-1000" :class="isCorrect ? 'text-black' : 'text-primary'">
			{{ formatOption(props.value) }}
		</p>
	</button>
</template>
