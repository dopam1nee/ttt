import PropTypes from 'prop-types'
import { Field, Information } from './components' // импортируем контейнеры
import styles from './app.module.css'
import { PLAYER, STATUS } from './constants'

// шаблон (stateless) / разметка
export const AppLayout = ({
	// принимает пропсы
	status,
	currentPlayer,
	field,
	onCellClick,
	onRestartClick,
}) => (
	// деструктуризацией раскрываем state
	// принимает статус игры и текущего игрока, чтобы передать в компонент с информацией

	// выводит информацию и сетку
	<div className={styles.app}>
		<Information status={status} currentPlayer={currentPlayer} />
		<Field field={field} onCellClick={onCellClick} />
		<button className={styles.restartButton} onClick={onRestartClick}>
			Начать заново
		</button>
	</div>
)

AppLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]), // в status должен лежать один из трёх статусов
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]), // в currentPlayer должен лежать один из трёх игроков
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]), // в field должен лежать один из игроков
	),
	onCellClick: PropTypes.func, // onCellClick должен быть функцией
	onRestartClick: PropTypes.func, // onRestartClick должен быть функцией
}
