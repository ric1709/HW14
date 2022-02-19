import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'

const EXPENSES = [
	{
		id: 'e1',

		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2022, 7, 14),
	},
	{
		id: 'e2',
		title: 'New TV',
		amount: 799.49,
		date: new Date(2023, 2, 12),
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2024, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2022, 5, 12),
	},
]

const App = () => {
	const [expenses, setExpenses] = useState(EXPENSES)
	const saveDataHandler = (data) => {
		setExpenses([...expenses, data])
	}

	return (
		<div>
			<NewExpenses onSaveData={saveDataHandler} />
			<Expenses items={expenses} />
		</div>
	)
}

export default App
