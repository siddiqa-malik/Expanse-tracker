import { useState, useCallback, useContext, createContext, useEffect } from "react";

const  ExpenseContext = createContext();

const STORAGE_KEY = 'expense_transactions';

function ExpenseProvider ({children}){
const [transactions, setTransaction] = useState([]);

// Load from localStorage on mount
useEffect(() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      setTransaction(JSON.parse(stored));
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  }
}, []);

// Save to localStorage whenever transactions change
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}, [transactions]);

const addTransaction = useCallback((transactionData) => {
  const newTransaction = {
    id: Date.now(),
    ...transactionData
  }
  setTransaction((prev) => [...prev, newTransaction]);
}, [])

const deleteTransaction = useCallback((id) => {
  setTransaction((prev) => {
    return prev.filter((transaction) => transaction.id !== id)
  });
}, [])

// Calculate income, expense, and balance from transactions
const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

const balance = income - expense;

const value = {
    addTransaction,
    deleteTransaction,
    setTransaction,
    transactions,
    income,
    expense,
    balance
}

return (
<ExpenseContext.Provider value={value}>
    {children}
</ExpenseContext.Provider>
)

}


export {ExpenseProvider, ExpenseContext};