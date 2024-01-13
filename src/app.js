import React, { useState } from 'react'
import { AppLayout } from './app-layout' // импортируем шаблон
import { onCellClick, onRestartClick } from './clicks' // импортируем функции с кликами
import { createEmptyField } from './utils' // импортируем функцию с созданием пустого массива (сетки)
import { STATUS, PLAYER } from './constants' // импортируем константы статуса игры (ход / победа / ничья) и игрока (крестик / нолик / никто (пустая клетка))

// контейнер (stateful) / логика
export const App = () => {
	const [status, setStatus] = useState(STATUS.TURN) // статус игры: ход / победа (конец игры). По умолчанию - ход (просто название ключа, значения не нужны)
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS) // текуший игрок: крестик / нолик. По умолчанию - крестик (просто название ключа, значения не нужны)
	const [field, setField] = useState(createEmptyField()) // массив из 9-ти пустых строк

	const state = {
		// для передачи пропсов
		status,
		setStatus,
		currentPlayer,
		setCurrentPlayer,
		field,
		setField,
	}

	return (
		// возвращаем шаблон, который выводит всё на страницу
		<AppLayout
			// передаём пропсы
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			onCellClick={cellIndex => onCellClick(state, cellIndex)} //XXXXX функция принимает пропсы и индекс, мы в неё передаём state с пропсами и индекс ячейки (его передаём в field-layout)
			onRestartClick={() => onRestartClick(state)} // передаём пропс, в который кладём state
		/>
	)
}
