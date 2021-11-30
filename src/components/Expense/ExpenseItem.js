import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../../UI/Card';

function ExpenseItem(props) {
    // console.log(props)
    let expenseTitle = props.title;
    let expenseAmount = props.amount;

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </Card>
        
    );
}

export default ExpenseItem;