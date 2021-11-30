import React, {useState} from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

//it's not a wrapper component
const NewExpense = (props) => {
    //lifting up method
    const saveExpenseDataHundler = (enteredExpenseData) => {
        // console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHundler} />
    </div>
}

export default NewExpense;