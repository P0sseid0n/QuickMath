<script setup lang="ts">
const props = defineProps<
	{
		isCorrect?: boolean
	} & ({ value: number; fake?: false } | { fake: true; value?: number })
>()

function formatOption(option: number): string {
	if (Number.isInteger(option)) {
		return option.toString()
	} else {
		return option.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
	}
}

const buttonClasses = computed(() => {
	if (props.isCorrect === true) return 'brightness-200'
	if (props.isCorrect === false) return 'opacity-50'

	return 'hover:brightness-125'
})
</script>

<template>
	<button class="w-full transition-all duration-300 rounded-2xl py-6 bg-button" :class="buttonClasses">
		<p class="text-2xl transition-colors duration-1000 text-primary">
			<template v-if="props.fake"> &nbsp; </template>
			<template v-else>
				{{ formatOption(props.value) }}
			</template>
		</p>
	</button>
</template>
