import { PLAYER } from '../constants'

// проверяем, есть ли хотя бы одна пустая клета (равная 'никому')
export const checkEmptyCell = field =>
	field.some(cellPlayer => cellPlayer === PLAYER.NOBODY)
// проходит по всему полю и проверяет каждую клетку на 'никого' / пустую
