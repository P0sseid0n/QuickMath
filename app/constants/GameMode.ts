const GameMode = {
	TimeTrial: 'TimeTrial',
	// Endless: 'Endless',
} as const
type GameMode = (typeof GameMode)[keyof typeof GameMode]

export default GameMode
