import React, { useState } from 'react';
import styled from 'styled-components';

const NewExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  })

  const titleChangeHandler = event => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value }
    })
  };
  const amountChangeHandler = event => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value }
    })
  };
  const dateChangeHandler = event => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value }
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onFormSubmit(userInput);
    setUserInput(() => {
      return {
        title: '',
        amount: '',
        date: ''
      }
    })
  }

  const cancelAddExpenseHandler = event => {
    props.onGetToggleValue(event.target.value)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <NewExpenseControls>
          <NewExpenseControl>
            <label for="">Title</label>
            <input type="" value={userInput.title} onChange={titleChangeHandler} />
          </NewExpenseControl>

          <NewExpenseControl>
            <label for="">Amount</label>
            <input type="" value={userInput.amount} onChange={amountChangeHandler} min="0.01" step="0.01" />
          </NewExpenseControl>

          <NewExpenseControl>
            <label for="">Date</label>
            <input type="date" value={userInput.date} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
          </NewExpenseControl>
        </NewExpenseControls>

        <NewExpenseActions>
          <button type="submit">Add Expense</button>
          <button value="0" onClick={cancelAddExpenseHandler}>Cancel</button>
        </NewExpenseActions>
      </form>
    </div>
  )
}

export default NewExpenseForm

const NewExpenseControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`

const NewExpenseControl = styled.div`
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }

`
const NewExpenseActions = styled.div`
  text-align: right;
`

