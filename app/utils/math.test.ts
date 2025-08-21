import { it, expect, describe } from 'vitest'
import DifficultyLevels from '~/constants/DifficultyLevels'

import MathUtils from './math'

describe('calculateExpression', () => {
	it('should respect operator precedence', () => {
		const result = MathUtils.calculateExpression('2 + 2  * 2')

		expect(result).toBe(6)
	})

	it('should handle parentheses correctly', () => {
		const result = MathUtils.calculateExpression('(2 + 2) * 2')

		expect(result).toBe(8)
	})

	it('should handle division by zero', () => {
		const result = MathUtils.calculateExpression('10 / 0')

		expect(result).toBe(Infinity)
	})
})

describe('getRandomOperation', () => {
	it('should return a random operation based on difficulty', () => {
		const easyOperation = MathUtils.getRandomOperation(DifficultyLevels.EASY - 1)
		const mediumOperation = MathUtils.getRandomOperation(DifficultyLevels.MEDIUM - 1)
		const hardOperation = MathUtils.getRandomOperation(DifficultyLevels.HARD - 1)

		expect(['+', '-']).toContain(easyOperation)
		expect(['+', '-', '*']).toContain(mediumOperation)
		expect(['+', '-', '*', '/']).toContain(hardOperation)
	})

	it('should return a valid operation', () => {
		const operation = MathUtils.getRandomOperation(DifficultyLevels.HARD)

		expect(['+', '-', '*', '/']).toContain(operation)
	})
})

describe('getRandomNumberBetween', () => {
	it('should return a number between the specified range', () => {
		const min = 1
		const max = 10
		const result = MathUtils.getRandomNumberBetween(min, max)

		expect(result).toBeGreaterThanOrEqual(min)
		expect(result).toBeLessThanOrEqual(max)
	})

	it('should return an integer when integer is true', () => {
		const result = MathUtils.getRandomNumberBetween(1, 10, true)

		expect(Number.isInteger(result)).toBe(true)
	})

	it('should return a float when integer is false', () => {
		const result = MathUtils.getRandomNumberBetween(1, 10, false)

		expect(Number.isInteger(result)).toBe(false)
	})
})

describe('generateMathExpression', () => {
	it('should generate a valid math expression based on difficulty', () => {
		for (let difficulty = 1; difficulty < 5; difficulty++) {
			const expression = MathUtils.generateMathExpression(difficulty)
			const countOperations = expression
				.split(' ')
				.map(e => e.replace(/\D/g, ''))
				.filter(e => e !== '').length

			expect(countOperations).toBe(difficulty + 1)
		}
	})

	it('should generate a valid math expression with parentheses and no', () => {
		const difficulty = DifficultyLevels.HARD

		let hasParentheses = false
		let hasNoParentheses = false

		for (let i = 0; i < 1000; i++) {
			const expression = MathUtils.generateMathExpression(difficulty)

			if (expression.includes('(') || expression.includes(')')) {
				hasParentheses = true
			} else {
				hasNoParentheses = true
			}
		}
		expect(hasParentheses).toBe(true)
		expect(hasNoParentheses).toBe(true)
	})
})
