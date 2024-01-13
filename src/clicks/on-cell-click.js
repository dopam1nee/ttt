import { checkWin, checkEmptyCell } from '../utils' // импортируем функции на проверку победы и проверку пустых клеток
import { STATUS, PLAYER } from '../constants'

export const onCellClick = (
	// клик на клетку
	{ status, field, currentPlayer, setField, setStatus, setCurrentPlayer },
	cellIndex,
) => {
	// принимает индекс клетки, на которую кликнули. Индекс передаём в field-layout
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	) {
		// если победа (конец игры) или ничья (конец игры) или все клетки заняты каким-то знаком (не пустотой), то ничего не делаем по нажатию
		return
	}

	const newField = [...field] // новый массив с теми же значениями

	//if (currentPlayer === PLAYER.CROSS) {
	//	// если текущий игрок крестик
	//	newField[cellIndex] = PLAYER.CROSS // устанавливаем крестик в ячейке по индексу
	//} else {
	//	// если текуший игрок нолик
	//	newField[cellIndex] = PLAYER.NOUGHT // устанавливаем крестик в ячейке по индексу
	//}

	//newField[cellIndex] =
	//	currentPlayer === PLAYER.CROSS ? PLAYER.CROSS : PLAYER.NOUGHT
	//// если текущий игрок равен крестику, то устанавливаем крестик, иначе - нолик

	newField[cellIndex] = currentPlayer // устанавливаем по индексу в ячейку текущего игрока (крестик / нолик)
	// в прошлых записях делается то же самое, только с лишними условиями. Мы везде устанавливаем текущего игрока

	setField(newField) // обновляем на новое поле с одним изменённым элементом по индексу (крестик / нолик)

	if (checkWin(newField, currentPlayer)) {
		// если текущий игрок выиграл
		setStatus(STATUS.WIN) // меняем статус игры
	} else if (checkEmptyCell(newField)) {
		// если есть пустая клетка, меняем игрока
		setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS)
		// если текущий игрок крестик, то меняем его на нолик, иначе - на крестик
	} else {
		// если пустой клетки нет
		setStatus(STATUS.DRAW)
	}
}
