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
	if (props.isCorrect === true) return 'bg-accent text-background ring-accent scale-[1.02]'
	if (props.isCorrect === false) return 'bg-danger/15 text-danger ring-danger/40 animate-[shake_.35s_ease-in-out]'

	return 'bg-button text-primary ring-transparent hover:-translate-y-0.5 hover:bg-button/70 hover:ring-primary/10 active:translate-y-0 active:scale-[0.98]'
})
</script>

<template>
	<button
		type="button"
		class="w-full rounded-2xl py-6 ring-1 ring-inset transition duration-200 ease-out sm:py-7"
		:class="buttonClasses"
		:aria-hidden="props.fake || undefined"
		:tabindex="props.fake ? -1 : undefined"
	>
		<p class="text-2xl font-semibold tabular-nums tracking-tight">
			<template v-if="props.fake"> &nbsp; </template>
			<template v-else>
				{{ formatOption(props.value) }}
			</template>
		</p>
	</button>
</template>

<style>
@keyframes shake {
	0%,
	100% {
		transform: translateX(0);
	}
	25% {
		transform: translateX(-4px);
	}
	75% {
		transform: translateX(4px);
	}
}
</style>
