import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHundler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const [filteredArray,setFilteredArray] = useState(props.expenses)
    function RenderNewArray () {
        props.expenses.map((el) => {
            let newList = [...props.expenses].filter(el => el.date.getFullYear() == filteredYear)
            setFilteredArray(newList)
        })
    }

    return <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHundler} />
        <button onClick={RenderNewArray}>filter</button>
        {
            filteredArray.map((el) => {
                    return <ExpenseItem 
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                    key={el.id}/>
            })
        }
    </Card>
}

export default Expenses;