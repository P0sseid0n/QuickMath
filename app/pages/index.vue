<script setup lang="ts">
import { useGameStore } from '~/stores/Game'

const GameStore = useGameStore()

const fontSize = computed(() => {
	const baseSize = 32
	const minSize = 16

	return `${Math.max(minSize, baseSize - GameStore.expression.length * 0.5)}px`
})

onMounted(() => {
	GameStore.startRound()
})
</script>

<template>
	<div class="bg-background h-screen w-full text-white font-mono">
		<div class="mx-auto h-full w-full max-w-6xl flex flex-col">
			<header class="py-16 select-none">
				<h1 class="text-center text-4xl">QuickMath</h1>
			</header>

			<section class="flex flex-row justify-between">
				<div class="flex items-center gap-1">
					<Icon class="text-2xl" name="i-material-symbols-star-rounded" />
					<span class="font-medium">{{ GameStore.score }}</span>
				</div>
				<div>
					<button>Modo De Jogo</button>
				</div>
			</section>

			<main id="Display" class="select-none bg-white/2 rounded-2xl py-20 mt-4 mb-8 w-full text-center">
				<h3 :style="{ fontSize }">{{ GameStore.expression }} = ?</h3>
			</main>

			<GameOptions />
		</div>
	</div>
</template>
