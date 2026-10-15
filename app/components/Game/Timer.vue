<script setup lang="ts">
interface Props {
	duration?: number
	autoStart?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	duration: 10000,
	autoStart: false,
})

const emit = defineEmits<{
	timeEnd: []
}>()

const timerBar = useTemplateRef('timerBar')
const isRunning = ref(false)
const timeLeft = ref(props.duration)
const startTime = ref(0)

let intervalId: NodeJS.Timeout | null = null

function startTimer(time: number = props.duration) {
	if (isRunning.value) return

	timeLeft.value = time
	startTime.value = Date.now()
	isRunning.value = true

	// Aplicar animação CSS
	if (timerBar.value) {
		// Força o reflow para a transição partir da barra cheia
		void timerBar.value.offsetWidth
		timerBar.value.style.transition = `transform ${time}ms linear, background-color 300ms`
		timerBar.value.style.transform = 'scaleX(0)'
	}

	// Atualizar contador a cada 100ms
	intervalId = setInterval(() => {
		const elapsed = Date.now() - startTime.value
		timeLeft.value = Math.max(0, time - elapsed)

		if (timeLeft.value <= 0) {
			stopTimer()
			emit('timeEnd')
		}
	}, 100)
}

function stopTimer() {
	isRunning.value = false
	if (intervalId) {
		clearInterval(intervalId)
		intervalId = null
	}
}

function resetTimer() {
	stopTimer()
	timeLeft.value = props.duration

	if (timerBar.value) {
		timerBar.value.style.transition = 'none'
		timerBar.value.style.transform = 'scaleX(1)'
	}
}

// Computed para mostrar segundos restantes
const secondsLeft = computed(() => {
	return Math.ceil(timeLeft.value / 1000)
})

// Auto iniciar se especificado
onMounted(() => {
	if (props.autoStart) {
		startTimer()
	}
})

// Limpar interval ao desmontar
onUnmounted(() => {
	stopTimer()
})

defineExpose({
	startTimer,
	stopTimer,
	resetTimer,
	isRunning: readonly(isRunning),
	timeLeft: readonly(timeLeft),
})

const isRunningOut = computed(() => isRunning.value && timeLeft.value <= 3000)
</script>

<template>
	<div class="space-y-2">
		<div
			class="h-1.5 w-full overflow-hidden rounded-full bg-button"
			role="progressbar"
			aria-label="Time left"
			:aria-valuemax="Math.ceil(props.duration / 1000)"
			aria-valuemin="0"
			:aria-valuenow="secondsLeft"
		>
			<div
				ref="timerBar"
				class="h-full w-full origin-left rounded-full"
				:class="isRunningOut ? 'bg-danger' : 'bg-accent'"
			></div>
		</div>
		<div class="text-right text-sm font-medium tabular-nums transition-colors duration-300" :class="isRunningOut ? 'text-danger' : 'text-primary/55'">
			{{ secondsLeft }}s
		</div>
	</div>
</template>
