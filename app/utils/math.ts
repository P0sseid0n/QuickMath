import { evaluate, random, randomInt } from 'mathjs'
import DifficultyLevels from '@/constants/DifficultyLevels'

/**
 * Avalia uma expressão matemática de forma segura.
 */
export const calculateExpression = (expression: string): number => evaluate(expression)

export const getRandomOperation = (difficulty: number): string => {
	let operations = ['+', '-', '*', '/']

	if (DifficultyLevels.EASY.includes(difficulty)) {
		operations = ['+', '-']
	} else if (DifficultyLevels.MEDIUM.includes(difficulty)) {
		operations = ['+', '-', '*']
	}

	return operations[Math.floor(Math.random() * operations.length)]!
}

/**
 * Gera um número aleatório entre min e max.
 * Se integer=true, retorna inteiro. Se false, retorna float com 2 casas decimais.
 */
export const getRandomNumberBetween = (min: number, max: number, integer: boolean = true): number => {
	return integer ? randomInt(min, max) : random(min, max)
}

/**
 * Gera uma expressão matemática aleatória baseada na dificuldade.
 * Limita o valor máximo para evitar resultados exagerados.
 */
export const generateMathExpression = (difficulty: number) => {
	const max = Math.min(10 * Math.pow(2, difficulty - 1), 200)
	const isEasy = DifficultyLevels.EASY.includes(difficulty)
	const min = isEasy ? 1 : -max
	const numOperations = Math.max(1, Math.min(difficulty, 5))

	let current = getRandomNumberBetween(min, max, true)
	let expressionResult = current.toString()
	const parenthesesChance = 30

	for (let i = 0; i < numOperations; i++) {
		let operation = getRandomOperation(difficulty)
		let nextNumber: number

		if (isEasy && operation === '-') {
			if (current === 0) operation = '+'

			nextNumber = getRandomNumberBetween(0, Math.max(0, current), true)
		} else {
			nextNumber = getRandomNumberBetween(min, max, true)

			if (operation === '/' && nextNumber === 0) nextNumber = 1
		}

		const useParentheses = i < numOperations - 1 ? Math.random() < parenthesesChance / 100 : false

		if (useParentheses) expressionResult = `(${expressionResult} ${operation} ${nextNumber})`
		else expressionResult = `${expressionResult} ${operation} ${nextNumber}`

		current = calculateExpression(`${current} ${operation} ${nextNumber}`)
	}

	return expressionResult
}

export const getPerturbationRange = (correctAnswer: number, difficulty: number): number => {
	const minRange = 3
	const maxRange = round(10 * (difficulty * 1.1))

	if (correctAnswer === 0) return minRange

	const baseVariance = Math.pow(Math.abs(correctAnswer), 2) / difficulty
	const stdDeviation = Math.sqrt(baseVariance) * 0.6

	return Math.max(minRange, Math.min(stdDeviation, maxRange))
}

export default {
	calculateExpression,
	getRandomOperation,
	getRandomNumberBetween,
	generateMathExpression,
	getPerturbationRange,
}
