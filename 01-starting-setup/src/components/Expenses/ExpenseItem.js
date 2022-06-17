import React from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import styled from 'styled-components';

const ExpenseItem = (props) => {
  return (
    <Expense>
      <ExpenseDate date={props.date} />
      <ExpenseItemDescription>
        <h2>{props.title}</h2>
        <ExpenseItemPrice>${props.amount}</ExpenseItemPrice>
      </ExpenseItemDescription>
    </Expense>
  )
}

export default ExpenseItem


const Expense = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
`

const ExpenseItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
  }

  @media {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;

    h2 {
      font-size: 1.25rem;
    }

    ExpenseItemPrice {
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
    }
  }
`

const ExpenseItemPrice = styled(Card)`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
`
