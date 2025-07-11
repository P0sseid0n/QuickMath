import DifficultyLevels from '~/constants/difficultyLevels'

export function calculateExpression(expression: string): number {
	return new Function(`return ${expression}`)()
}

export function getRandomOperation(difficulty: number): string {
	let operations = ['+', '-', '*', '/']

	if (difficulty < DifficultyLevels.EASY) {
		operations = ['+', '-']
	} else if (difficulty < DifficultyLevels.MEDIUM) {
		operations = ['+', '-', '*']
	}

	return operations[Math.floor(Math.random() * operations.length)]!
}

export function getRandomNumberBetween(min: number, max: number, integer: boolean = true): number {
	const randomNumber = Math.random() * (max - min) + min

	return integer ? Math.floor(randomNumber) : Math.round(randomNumber * 100) / 100
}

export function generateMathExpression(difficulty: number) {
	const min = 1
	const max = 10 * (difficulty * 2)
	const numOperations = difficulty

	let expressionResult = getRandomNumberBetween(min, max, true).toString()
	const parenthesesChance = 30

	for (let i = 0; i < numOperations; i++) {
		const operation = getRandomOperation(difficulty)
		let nextNumber = getRandomNumberBetween(min, max, true)

		if (operation === '/' && nextNumber === 0) nextNumber = 1

		const useParentheses = i < numOperations - 1 ? Math.random() < parenthesesChance / 100 : false
		if (useParentheses) {
			expressionResult = `(${expressionResult} ${operation} ${nextNumber})`
		} else {
			expressionResult = `${expressionResult} ${operation} ${nextNumber}`
		}
	}

	return expressionResult
}

export function getPerturbationRange(correctAnswer: number, difficulty: number): number {
	const minRange = 3
	const maxRange = 10

	let perturbationRange = 0
	if (correctAnswer === 0) {
		perturbationRange = minRange
	} else {
		perturbationRange = (Math.abs(correctAnswer) / difficulty) * 1.2
		perturbationRange = Math.max(minRange, Math.min(perturbationRange, maxRange))
	}

	return perturbationRange
}

export default {
	calculateExpression,
	getRandomOperation,
	getRandomNumberBetween,
	generateMathExpression,
	getPerturbationRange,
}
