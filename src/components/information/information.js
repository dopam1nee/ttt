import PropTypes from 'prop-types'
import { PLAYER, PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants'
import { InformationLayout } from './information-layout'

// контейнер (stateful) / логика
export const Information = ({ status, currentPlayer }) => {
	// по умолчанию status - STATUS.TURN, currentPlayer - PLAYER.CROSS
	const playerAction = PLAYER_ACTION[status] // получаем значение 'Ходит' по ключу STATUS.TURN в объекте PLAYER_ACTION
	const playerName = PLAYER_NAME[currentPlayer] // получаем значение 'крестик' по ключу PLAYER.CROSS в объекте PLAYER_NAME

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`
	// если текущий статус равен DRAW, тогда выводим 'Ничья', иначе выводим текущее действие и текущего игрока

	return <InformationLayout information={information} />
}

Information.propTypes = {
	status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
}
