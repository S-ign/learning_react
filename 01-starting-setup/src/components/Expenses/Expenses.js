import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';
import Card from '../UI/Card'

const Expenses = (props) => {
  return (
    <AllExpenses>
    {props.expenses.map((expense) => (
      <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
    ))}
    </AllExpenses>
  );
}

export default Expenses

const AllExpenses = styled(Card)`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`
