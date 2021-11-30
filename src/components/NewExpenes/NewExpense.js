import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

//it's not a wrapper component
const NewExpense = (props) => {
    //lifting up method
    const [active,setActive] = useState(false)
    const saveExpenseDataHundler = (enteredExpenseData) => {
        // console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData)
    }

    return <div className='new-expense'>
        <div>
            <button onClick={() => {
                setActive(true)
            }}>onAddExpense</button>
            <button onClick={() => {
                setActive(false)
            }}>closeForm</button>
        </div>
        <ExpenseForm active={active} onSaveExpenseData={saveExpenseDataHundler} />
    </div>
}

export default NewExpense;