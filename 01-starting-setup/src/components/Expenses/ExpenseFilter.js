import React, {useState} from 'react';
import styled from 'styled-components';

const ExpenseFilter = (props) => {
  const [year, setYear] = useState('2022')
  const liftYearToExpenses = event => {
    setYear(() => {
      return event.target.value
    })
    props.onGetYearFromExpenseFilter(year)
  }

  return (
    <ExpenseFilterStyle>
      <ExpenseFilterControl>
        <label>Filter by year</label>
        <select onChange={liftYearToExpenses}>
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
