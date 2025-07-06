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
	const max = 10 * difficulty //  TODO: Testar somar dificuldade
	const numOperations = difficulty

	let expressionResult = getRandomNumberBetween(min, max, true).toString()
	const parenthesesChance = 30

	for (let i = 0; i < numOperations; i++) {
		const operation = getRandomOperation(difficulty)
		let nextNumber = getRandomNumberBetween(min, max, true)

		if (operation === '/' && nextNumber === 0) nextNumber = 1

		const useParentheses = i < numOperations - 1 ? Math.random() < parenthesesChance / 100 : false
		console.log('useParentheses', useParentheses)
		if (useParentheses) {
			expressionResult = `(${expressionResult} ${operation} ${nextNumber})`
		} else {
			expressionResult = `${expressionResult} ${operation} ${nextNumber}`
		}
	}

	return expressionResult
}

export function getDistractionRange(correctAnswer: number, difficulty: number): number {
	const baseRange = 5 * difficulty
	const scaledRange = Math.floor(correctAnswer * 0.2)

	return Math.max(baseRange, scaledRange)
}

export default {
	calculateExpression,
	getRandomOperation,
	getRandomNumberBetween,
	generateMathExpression,
	getDistractionRange,
}
