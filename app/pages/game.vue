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

onMounted(() => {
	GameStore.startMatch({ difficulty: 1, mode: 'TimeTrial' })
	timer.value?.startTimer()
})
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
						type="button"
						class="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-danger/80 transition duration-200 hover:bg-danger/10 hover:text-danger active:scale-95"
					>
						<Icon class="size-4" name="ph:stop-duotone" />
						End match
					</button>
				</section>

				<section
					aria-live="polite"
					class="mb-8 mt-5 rounded-3xl bg-button/40 px-6 py-16 text-center ring-1 ring-inset ring-primary/5 select-none sm:py-20"
				>
					<h2 class="font-semibold tabular-nums tracking-tight text-accent" :style="{ fontSize }">{{ displayExpression }} = ?</h2>
				</section>

				<GameOptions />

				<GameTimer ref="timer" class="mt-auto pt-16" />
			</main>
		</div>
	</div>
</template>
