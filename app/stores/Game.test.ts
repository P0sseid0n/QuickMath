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

		expect(gameStore.expression).toMatch(/^-?\d+\s*[+\-*/]\s*-?\d+(\s*[+\-*/]\s*-?\d+)?$/)
	})
})
