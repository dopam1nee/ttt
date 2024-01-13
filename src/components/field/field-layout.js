import PropTypes from 'prop-types'
import { PLAYER, PLAYER_SIGN } from '../../constants'
import styles from './field.module.css'

// шаблон (stateless) / разметка
export const FieldLayout = (
	{ field, onCellClick }, // принимаем массив из 9 пустых строк и функцию
) => (
	<div className={styles.field}>
		{/* блок с сеткой */}
		{field.map(
			(
				cellPlayer, // клетка (игрок клетки)
				index, // индекс
			) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => onCellClick(index)} //XXXXX функция принимает пропсы и индекс, передаём индекс, перебирая массив через map
				>
					{PLAYER_SIGN[cellPlayer]}
					{/* PLAYER_SIGN.PLAYER.CROSS: '╳' */}
				</button>
			),
		)}
	</div>
)

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	onCellClick: PropTypes.func,
}
