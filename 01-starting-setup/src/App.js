import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const [expenses, setAllExpenses] = useState({listOfExpenses: [
      { id: "1", title: 'Car Insurance', date: new Date(2022, 6, 14), amount: 294.67 },
      { id: "2", title: 'Casino', date: new Date(2022, 8, 30), amount: 7150.80 },
      { id: "3", title: 'Groceries', date: new Date(2022, 5, 8), amount: 156.89 },
      { id: "4", title: 'Mortgage', date: new Date(2022, 7, 1), amount: 1200.00 }
    ]
  })


  const formSubmitHandler = (formData) => {
    setAllExpenses((prevState) => {
      // split the date string
      const ds = formData.date.split("-")
      // add the peices of the date into Date function to keep format
      // consistant, and assign that to the date gathered from the form
      formData.date = new Date(ds[0], ds[1], ds[2])
      // append the object to the list of expenses
      prevState.listOfExpenses.push(formData)
      // return the updated expenses
      return {...prevState}
    })
  }

  return (
    <div>
      <NewExpense onNewExpenses={formSubmitHandler} />
      <Expenses expenses={expenses.listOfExpenses} />
    </div>
  )
};

export default App;
