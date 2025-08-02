import { it, expect, describe, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from './Game'

describe('Game Store', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	it('should initialize with default values', () => {
		const gameStore = useGameStore()

		expect(gameStore.expression).toBe('')
		expect(gameStore.difficulty).toBe(1)
		expect(gameStore.score).toBe(0)
	})

	it('should generate a math expression on startRound', () => {
		const gameStore = useGameStore()
		gameStore.startRound()

		expect(gameStore.expression).toMatch(/^\d+ [+\-*/] \d+$/)
	})

	it('should start a round with expression matching difficulty 2 format', () => {
		const gameStore = useGameStore()
		gameStore.startRound({
			difficulty: 2,
		})

		expect(gameStore.expression).toMatch(/^[\d\s+\-*/()\[\]]+$/)
	})

	it('should add score when startRound is called with isCorrect: true', () => {
		const gameStore = useGameStore()

		expect(gameStore.score).toBe(0)

		gameStore.startRound({ isCorrect: true })
		expect(gameStore.score).toBe(10)
		expect(gameStore.expression).toMatch(/^\d+ [+\-*/] \d+$/)
	})

	it('should not add score when startRound is called with isCorrect: false', () => {
		const gameStore = useGameStore()

		expect(gameStore.score).toBe(0)

		gameStore.startRound({ isCorrect: false })
		expect(gameStore.score).toBe(0)
		expect(gameStore.expression).toMatch(/^\d+ [+\-*/] \d+$/)
	})

	it('should not add score when startRound is called without isCorrect parameter', () => {
		const gameStore = useGameStore()

		expect(gameStore.score).toBe(0)

		gameStore.startRound()
		expect(gameStore.score).toBe(0)
		expect(gameStore.expression).toMatch(/^\d+ [+\-*/] \d+$/)
	})

	it('should reset score to 0 when resetScore is called', () => {
		const gameStore = useGameStore()

		// Primeiro adiciona pontos através de startRound
		gameStore.startRound({ isCorrect: true })
		gameStore.startRound({ isCorrect: true })
		expect(gameStore.score).toBe(20)

		gameStore.resetScore()
		expect(gameStore.score).toBe(0)
	})
})
