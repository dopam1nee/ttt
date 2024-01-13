import { createEmptyField } from '../utils'
import { STATUS, PLAYER } from '../constants'

export const onRestartClick = ({ setStatus, setCurrentPlayer, setField }) => {
	// ставим изначальные значения
	setStatus(STATUS.TURN)
	setCurrentPlayer(PLAYER.CROSS)
	setField(createEmptyField())
}
