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
	<button class="w-full bg-white/2 hover:bg-white/3 transition rounded-2xl py-6 cursor-pointer">
		<p class="text-2xl">
			{{ formatOption(props.value) }}
		</p>
	</button>
</template>
