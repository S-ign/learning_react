import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const [expenses, setAllExpenses] = useState({listOfExpenses: [
      { id: "1", title: 'Car Insurance', date: new Date(2021, 6, 14), amount: 294.67 },
      { id: "2", title: 'Casino', date: new Date(2020, 8, 30), amount: 7150.80 },
      { id: "3", title: 'Groceries', date: new Date(2019, 5, 8), amount: 156.89 },
      { id: "4", title: 'Mortgage', date: new Date(2022, 7, 1), amount: 1200.00 }
    ]
  })

  // create a state that mirrors all expenses initially
  const [filteredExpenses, setFilteredExpenses] = useState(expenses)


  const prependExpense = (formData) => {
    setAllExpenses((prevState) => {
      // split the date string
      const ds = formData.date.split("-");
      // add the peices of the date into Date function to keep format
      // consistant, and assign that to the date gathered from the form
      formData.date = new Date(ds[0], ds[1], ds[2]);
      // append the object to the list of expenses
      prevState.listOfExpenses.unshift(formData);
      // return the updated expenses
      return {...prevState}
    });
  }

  const filterByYearHandler = year => {
    setFilteredExpenses((prevState) => {
      // update prevState with the current state of expense
      prevState = expenses
      
      if (year === 0) {
        return prevState
      }
      
      // filter that updated list with the selected year
     return {listOfExpenses: prevState.listOfExpenses.filter((e) => {
        return e.date.getFullYear() === year;
      })}
    })
  }

  return (
    <div>
      <NewExpense onNewExpenses={prependExpense} />
      <Expenses onYearChange={filterByYearHandler} expenses={filteredExpenses.listOfExpenses} />
    </div>
  )
};

export default App;
