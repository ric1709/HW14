import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
const NewExpenses = ({ onSaveData }) => {
	const SaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		onSaveData(expenseData)
	}
	const [isNewExpense, setIsNewExpense] = useState(false)
	let newExpense = ''
	if (isNewExpense) {
		newExpense = (
			<ExpenseForm
				onChangeNewExpense={setIsNewExpense}
				onSaveExpenseData={SaveExpenseDataHandler}
			/>
		)
	} else
		newExpense = (
			<button onClick={() => setIsNewExpense(true)}>
				ADD NEW EXPENSE
			</button>
		)

	return <div className='new-expense'>{newExpense}</div>
}

export default NewExpenses
