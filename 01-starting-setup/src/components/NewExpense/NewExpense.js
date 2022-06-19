import React, {useState} from 'react';
import styled from 'styled-components';
import AddExpense from './AddExpense'
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {

  const formSubmitHandler = (enteredFormData) => {
    const formData = {
      ...enteredFormData,
      id: Math.random().toString()
    };
    // call the function to pass formData to the parent compenent
    props.onNewExpenses(formData);
  }

  const [formToggle, setFormToggle] = useState("0")

  const toggleFormHandler = toggle => {
    setFormToggle(toggle)
  }

  return (
    <NewExpenseStyle>

      {formToggle === "0" && (
        <AddExpense onGetToggleValue={toggleFormHandler} />
      )}

      {formToggle === "1" && (
        <NewExpenseForm onGetToggleValue={toggleFormHandler} onFormSubmit={formSubmitHandler} />
      )}

    </NewExpenseStyle>
  )
};

export default NewExpense

const NewExpenseStyle = styled.div`
    background-color: #a892ee;
    padding: 1rem;
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
  }

  button:hover,
  button:active {
  background-color: #510674;
  border-color: #510674;
  }

  button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
  }

  button.alternative:hover,
  button.alternative:active {
    background-color: #ddb3f8;
  }
`
