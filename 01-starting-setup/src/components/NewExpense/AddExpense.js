import React from 'react';
import styled from 'styled-components';

const AddExpense = (props) => {

  const toggleHandler = event => {
    props.onGetToggleValue(event.target.value)
  }

  return (
    <AddExpenseStyle>
      <button value="1" onClick={toggleHandler}>Add New Expense</button>
    </AddExpenseStyle>
  )
}

export default AddExpense

const AddExpenseStyle = styled.div`
`
