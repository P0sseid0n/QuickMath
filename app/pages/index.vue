<script setup lang="ts"></script>

<template>
	<div class="bg-background h-screen w-full text-white font-[Poppins]">
		<div class="mx-auto h-full w-full max-w-5xl flex flex-col items-center p-8">
			<header class="w-full flex items-center justify-end gap-4">
				<button class="opacity-50 hover:opacity-100 transition">
					<Icon class="size-8 align-middle" name="ph:gear-six-duotone" />
				</button>
				<div class="rounded-full size-10 bg-zinc-600"></div>
			</header>

			<h1 class="text-accent text-7xl font-bold w-full text-center mt-32">QuickMath</h1>
			<h3 class="text-xl w-full text-center mt-2 mb-32 opacity-85">The ultimate math challenge</h3>

			<NuxtLink to="/game" class="w-full max-w-96">
				<button
					class="mb-8 w-full py-3 text-lg font-semibold bg-accent text-gray-900 rounded-lg shadow-md hover:brightness-110 transition transform"
				>
					Play
				</button>
			</NuxtLink>
			<button
				class="flex items-center justify-center gap-2 w-full max-w-96 py-3 text-lg font-medium text-accent bg-accent/5 border border-accent/40 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
			>
				<Icon name="ph:trophy-duotone" class="w-5 h-5 text-accent/70" />
				Ranking
			</button>
		</div>
	</div>
</template>
