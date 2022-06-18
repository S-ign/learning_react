import React from 'react';
import styled from 'styled-components';

const ExpenseFilter = (props) => {
  const liftYearToExpenses = event => {
    props.onGetYearFromExpenseFilter(event.target.value)
  }

  return (
    <ExpenseFilterStyle>
      <ExpenseFilterControl>
        <label>Filter by year</label>
        <select value={props.selected} onChange={liftYearToExpenses}>
          <option value='0'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </ExpenseFilterControl>
    </ExpenseFilterStyle>
  )
}

export default ExpenseFilter

const ExpenseFilterStyle = styled.div`
  color: white;
  padding: 0 1rem;
`

const ExpenseFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }
`
