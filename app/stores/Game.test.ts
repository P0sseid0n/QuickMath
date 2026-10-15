import { it, expect, describe, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from './Game'
import GameMode from '@/constants/GameMode'

describe('Game Store', () => {
	// beforeEach(() => {
	// setActivePinia(createPinia())
	// })

	it('should initialize with default values', () => {
		const gameStore = useGameStore()

		expect(gameStore.expression).toBe('')
		expect(gameStore.difficulty).toBe(1)
		expect(gameStore.score).toBe(0)
	})

	it('should generate a math expression on startMatch', () => {
		const gameStore = useGameStore()
		gameStore.startMatch({ difficulty: 1, mode: GameMode.TimeTrial })

		expect(gameStore.expression).toMatch(/^\d+ [+\-*/] \d+$/)
	})

	it('should start a match with expression matching difficulty 2 format', () => {
		const gameStore = useGameStore()
		gameStore.startMatch({
			difficulty: 2,
			mode: 'TimeTrial',
		})

		expect(gameStore.expression).toMatch(/^[\d\s+\-*/()\[\]]+$/)
	})

	it('should add score when nextRound is called with isCorrect: true', () => {
		const gameStore = useGameStore()
		gameStore.startMatch({ difficulty: 1, mode: 'TimeTrial' })

		expect(gameStore.score).toBe(0)

		gameStore.nextRound(true)
		expect(gameStore.score).toBe(10)
		expect(gameStore.expression).toMatch(/^\d+ [+\-*/] \d+$/)
	})

	it('should not add score when nextRound is called with isCorrect: false', () => {
		const gameStore = useGameStore()
		gameStore.startMatch({ difficulty: 1, mode: 'TimeTrial' })

		expect(gameStore.score).toBe(0)

		gameStore.nextRound(false)
		expect(gameStore.score).toBe(0)
		expect(gameStore.expression).toMatch(/^\d+ [+\-*/] \d+$/)
	})

	it('should add score when nextRound is called without isCorrect parameter (default true)', () => {
		const gameStore = useGameStore()
		gameStore.startMatch({ difficulty: 1, mode: 'TimeTrial' })

		expect(gameStore.score).toBe(0)

		gameStore.nextRound()
		expect(gameStore.score).toBe(10)
		expect(gameStore.expression).toMatch(/^\d+ [+\-*/] \d+$/)
	})

	it('should reset score when starting a new match', () => {
		const gameStore = useGameStore()
		gameStore.startMatch({ difficulty: 1, mode: 'TimeTrial' })

		// Add some points
		gameStore.nextRound(true)
		gameStore.nextRound(true)
		expect(gameStore.score).toBe(20)

		// Start a new match should reset score
		gameStore.startMatch({ difficulty: 2, mode: 'TimeTrial' })
		expect(gameStore.score).toBe(0)
	})
})
