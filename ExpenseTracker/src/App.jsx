import { useState } from 'react'

import './App.css'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'

function App() {
  const [transactions, setTransaction] = useState([])

  const addTransaction=(data)=>{
    setTransaction([...transactions,data])
  }

  return (
    <>
    <AddExpense addTransaction={addTransaction}/>
    <ExpenseList transactions={transactions}/>
    </>
  )
}

export default App
