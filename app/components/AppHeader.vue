<script setup lang="ts">
defineProps<{
	showLogo?: boolean
}>()
</script>

<template>
	<header class="flex w-full items-center gap-3" :class="showLogo ? 'justify-between' : 'justify-end'">
		<NuxtLink v-if="showLogo" to="/" class="rounded-md text-2xl font-semibold tracking-tight text-accent select-none">
			QuickMath
		</NuxtLink>

		<div class="flex items-center gap-2">
			<button
				type="button"
				aria-label="Settings"
				class="grid size-11 place-items-center rounded-xl text-primary/50 transition duration-200 hover:bg-button hover:text-primary active:scale-95"
			>
				<Icon class="size-6" name="ph:gear-six-duotone" />
			</button>
			<div class="grid size-10 place-items-center rounded-xl bg-button text-primary/40" aria-label="Guest profile" role="img">
				<Icon class="size-5" name="ph:user-duotone" />
			</div>
		</div>
	</header>
</template>
