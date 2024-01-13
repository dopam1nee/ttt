import PropTypes from 'prop-types'
import { FieldLayout } from './field-layout'
import { PLAYER } from '../../constants'

// контейнер (stateful) / логика
export const Field = ({ field, onCellClick }) => {
	return <FieldLayout field={field} onCellClick={onCellClick} />
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	onCellClick: PropTypes.func,
}
