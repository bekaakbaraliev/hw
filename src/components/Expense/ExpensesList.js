import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expense Found</h2>
    }

    return <ul className='expenses-list'>
        {props.items.map((el) => {
            return <ExpenseItem
                title={el.title}
                amount={el.amount}
                date={el.date}
                key={el.id}
            />
        })}
    </ul>

}

export default ExpensesList;