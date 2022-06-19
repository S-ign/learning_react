import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import styled from 'styled-components';
import Card from '../UI/Card'

const Expenses = (props) => {
  const [year, setYear] = useState('2020')
  const getYearHandler = year => {
    setYear(year);
    props.onYearChange(parseInt(year, 10))
  }

  return (
    <AllExpenses>
    <ExpenseFilter selected={year} onGetYearFromExpenseFilter={getYearHandler} />
    <ExpensesChart expenses={props.expenses} />
    {props.expenses.map((expense) => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
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
