<script setup lang="ts"></script>

<template>
	<div class="relative min-h-dvh w-full overflow-hidden bg-background">
		<div
			aria-hidden="true"
			class="pointer-events-none absolute left-1/2 top-[18%] h-[28rem] w-[44rem] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(var(--color-accent)/0.10),transparent)] blur-2xl"
		/>

		<div class="relative mx-auto flex min-h-dvh w-full max-w-5xl flex-col items-center px-6 pb-12 pt-6 sm:px-8">
			<AppHeader />

			<main class="flex w-full flex-1 flex-col items-center justify-center pb-16">
				<p aria-hidden="true" class="mb-6 font-medium tabular-nums tracking-wide text-accent/40 select-none">7 × 8 − 12 = ?</p>

				<h1 class="text-center text-6xl font-bold leading-none tracking-tighter text-accent sm:text-8xl">QuickMath</h1>
				<p class="mt-4 max-w-sm text-center text-lg text-primary/65 [text-wrap:balance]">
					Solve each expression before the clock runs out.
				</p>

				<div class="mt-16 flex w-full max-w-sm flex-col items-center gap-3">
					<NuxtLink
						to="/game"
						class="group flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-4 text-lg font-semibold text-background shadow-[0_10px_30px_-12px_rgb(var(--color-accent)/0.5)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-12px_rgb(var(--color-accent)/0.6)] active:translate-y-0 active:scale-[0.98]"
					>
						<Icon name="ph:play-fill" class="size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
						Play
					</NuxtLink>

					<button
						type="button"
						disabled
						class="flex w-full items-center justify-center gap-2 rounded-2xl py-3 font-medium text-primary/45 disabled:cursor-not-allowed"
					>
						<Icon name="ph:trophy-duotone" class="size-5" />
						Ranking
						<span class="rounded-md bg-button px-1.5 py-0.5 text-xs font-medium text-primary/50">soon</span>
					</button>
				</div>
			</main>
		</div>
	</div>
</template>
