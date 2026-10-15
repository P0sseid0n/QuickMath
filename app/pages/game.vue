<script setup lang="ts">
import { useGameStore } from '@/stores/Game'

const GameStore = useGameStore()

const timer = useTemplateRef('timer')

const fontSize = computed(() => {
	const baseSize = 80
	const minSize = 32
	const expressionLength = GameStore.expression?.length || 0

	return `${Math.max(minSize, baseSize - expressionLength * 0.5)}px`
})

const displayExpression = computed(() =>
	(GameStore.expression || '').replace(/\*/g, '×').replace(/\//g, '÷').replace(/-/g, '−')
)

async function startMatch() {
	GameStore.startMatch({ difficulty: 1, mode: 'TimeTrial' })

	// Espera o timer voltar a aparecer, senão a transição da barra não roda
	await nextTick()
	timer.value?.resetTimer()
	timer.value?.startTimer()
}

function endMatch() {
	timer.value?.stopTimer()
	GameStore.endMatch()
}

onMounted(startMatch)
</script>

<template>
	<div class="min-h-dvh w-full bg-background">
		<div class="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-6 pb-10 pt-6 sm:px-8">
			<AppHeader show-logo class="mb-12" />

			<main class="flex flex-1 flex-col">
				<section aria-label="Match info" class="flex items-end justify-between gap-4">
					<div>
						<div class="flex gap-5 text-sm text-primary/55">
							<span class="flex items-center gap-1.5">
								<Icon class="size-4" name="ph:game-controller-duotone" />
								{{ GameStore.mode }}
							</span>
							<span class="flex items-center gap-1.5 tabular-nums">
								<Icon class="size-4" name="ph:speedometer-duotone" />
								{{ GameStore.difficulty }}/10
							</span>
						</div>
						<p class="mt-2 flex items-baseline gap-2">
							<span class="text-sm font-medium text-primary/55">Score</span>
							<span class="text-3xl font-semibold tabular-nums tracking-tight">{{ GameStore.score }}</span>
						</p>
					</div>

					<button
						v-if="!GameStore.isFinished"
						type="button"
						@click="endMatch"
						class="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-danger/80 transition duration-200 hover:bg-danger/10 hover:text-danger active:scale-95"
					>
						<Icon class="size-4" name="ph:stop-duotone" />
						End match
					</button>
				</section>

				<template v-if="!GameStore.isFinished">
					<section
						aria-live="polite"
						class="mb-8 mt-5 rounded-3xl bg-button/40 px-6 py-16 text-center ring-1 ring-inset ring-primary/5 select-none sm:py-20"
					>
						<h2 class="font-semibold tabular-nums tracking-tight text-accent" :style="{ fontSize }">{{ displayExpression }} = ?</h2>
					</section>

					<GameOptions />
				</template>

				<section
					v-else
					aria-live="polite"
					class="mt-5 flex flex-col items-center rounded-3xl bg-button/40 px-6 py-16 text-center ring-1 ring-inset ring-primary/5 sm:py-20"
				>
					<h2 class="text-lg font-medium text-primary/60">Match over</h2>
					<p class="mt-2 text-7xl font-bold tabular-nums tracking-tighter text-accent">{{ GameStore.score }}</p>
					<p class="text-sm text-primary/45">points</p>

					<div class="mt-10 flex w-full max-w-xs flex-col gap-2">
						<button
							type="button"
							@click="startMatch"
							class="flex items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 font-semibold text-background transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
						>
							<Icon name="ph:arrow-counter-clockwise-bold" class="size-5" />
							Play again
						</button>
						<NuxtLink
							to="/"
							class="rounded-2xl py-3 font-medium text-primary/60 transition duration-200 hover:bg-button hover:text-primary"
						>
							Home
						</NuxtLink>
					</div>
				</section>

				<GameTimer v-show="!GameStore.isFinished" ref="timer" class="mt-auto pt-16" @time-end="endMatch" />
			</main>
		</div>
	</div>
</template>
