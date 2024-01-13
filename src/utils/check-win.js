import { WIN_PATTERNS } from '../constants'

export const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some(
		// проходится по каждому паттерну, и если выполнится хотя бы один паттерн (один массив из трёх индексов), вернёт true
		winPattern => winPattern.every(cellIndex => field[cellIndex] === currentPlayer),
		// проходится по каждому индексу паттерна (по трём числам), и если на этих индексах есть текущий игрок, вернёт true
	)
