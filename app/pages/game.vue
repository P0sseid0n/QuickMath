<script setup lang="ts">
import { useGameStore } from '@/stores/Game'

const GameStore = useGameStore()

definePageMeta({
	ssr: false,
})

const fontSize = computed(() => {
	const baseSize = 80
	const minSize = 32
	const expressionLength = GameStore.expression?.length || 0

	return `${Math.max(minSize, baseSize - expressionLength * 0.5)}px`
})

onMounted(() => {
	GameStore.startMatch({ difficulty: 2, mode: 'TimeTrial' })
})
</script>

<template>
	<div class="bg-background h-screen w-full text-white font-[Poppins]">
		<div class="mx-auto h-full w-full max-w-5xl flex flex-col p-8">
			<header class="mb-16 flex items-center justify-between">
				<h1 class="text-center text-4xl select-none text-accent font-bold">QuickMath</h1>
				<div class="flex items-center gap-4">
					<button class="opacity-50 hover:opacity-100 transition">
						<Icon class="size-8 align-middle" name="ph:gear-six-duotone" />
					</button>
					<div class="rounded-full size-10 bg-zinc-600"></div>
				</div>
			</header>

			<section>
				<div class="flex gap-10 opacity-75">
					<div class="flex items-center gap-2">
						<Icon class="size-6" name="ph:game-controller-duotone" />
						<p class="text-md">{{ GameStore.mode }}</p>
					</div>
					<div class="flex items-center gap-2">
						<Icon class="size-6" name="ph:speedometer-duotone" />
						<p class="text-md">{{ GameStore.difficulty }}/10</p>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<p class="text-xl">
						<span class="font-semibold">Score:</span> <span class="opacity-75">{{ GameStore.score }}</span>
					</p>

					<button
						class="px-3 py-2 text-sm text-red-500 bg-red-500/5 border border-red-500/20 rounded-md hover:bg-red-500/15 transition"
					>
						<Icon class="align-middle" name="ph:stop-duotone" />
						End Math
					</button>
				</div>
			</section>

			<main id="Display" class="select-none bg-white/2 rounded-2xl py-20 mt-5 mb-10 w-full text-center">
				<h3 class="text-accent" :style="{ fontSize }">{{ GameStore.expression }} = ?</h3>
			</main>

			<GameOptions />
		</div>
	</div>
</template>
