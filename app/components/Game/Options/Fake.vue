<template>
	<div id="Options" class="grid grid-cols-2 grid-rows-2 gap-4 w-full">
		<GameOptionsButton v-for="(_, index) in 4" :key="index" fake />
	</div>
</template>
