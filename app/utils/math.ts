import { evaluate, round } from 'mathjs'
import DifficultyLevels from '../constants/DifficultyLevels'

/**
 * Avalia uma expressão matemática de forma segura.
 */
export const calculateExpression = (expression: string): number => evaluate(expression)

export const getRandomOperation = (difficulty: number): string => {
	let operations = ['+', '-', '*', '/']

	if (difficulty < DifficultyLevels.EASY) {
		operations = ['+', '-']
	} else if (difficulty < DifficultyLevels.MEDIUM) {
		operations = ['+', '-', '*']
	}

	return operations[Math.floor(Math.random() * operations.length)]!
}

/**
 * Gera um número aleatório entre min e max.
 * Se integer=true, retorna inteiro. Se false, retorna float com 2 casas decimais.
 */
export const getRandomNumberBetween = (min: number, max: number, integer: boolean = true): number => {
	const randomNumber = Math.random() * (max - min) + min
	if (integer) {
		return Math.round(randomNumber)
	} else {
		return Math.round(randomNumber * 100) / 100
	}
}

/**
 * Gera uma expressão matemática aleatória baseada na dificuldade.
 * Limita o valor máximo para evitar resultados exagerados.
 */
export const generateMathExpression = (difficulty: number) => {
	const min = 1
	const max = Math.min(10 * Math.pow(2, difficulty - 1), 200)
	const numOperations = Math.max(1, Math.min(difficulty, 5))

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

export const getPerturbationRange = (correctAnswer: number, difficulty: number): number => {
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
