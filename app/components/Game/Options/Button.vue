<script setup lang="ts">
const props = defineProps<{
	value: number
}>()

function formatOption(option: number): string {
	if (Number.isInteger(option)) {
		return option.toString()
	} else {
		return option.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
	}
}
</script>

<template>
	<button class="w-full bg-button hover:bg-button/80 transition rounded-2xl py-6">
		<p class="text-2xl text-primary">
			{{ formatOption(props.value) }}
		</p>
	</button>
</template>
