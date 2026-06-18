import { useState, useCallback, useContext, createContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const  ExpenseContext = createContext({
  addTransaction: () => {},
  deleteTransaction: () => {},
  setTransaction: () => {},
  transactions: [],
  income: 0,
  expense: 0,
  balance: 0,
});

function ExpenseProvider ({children}){
const [transactions, setTransaction] = useState([]);
const authContext = useContext(AuthContext);
const user = authContext?.user;

// Get user-specific storage key
const getStorageKey = () => {
  return user ? `expense_transactions_${user.email}` : 'expense_transactions_guest';
};

// Load from localStorage on mount or when user changes
useEffect(() => {
  const storageKey = getStorageKey();
  const stored = localStorage.getItem(storageKey);
  if (stored) {
    try {
      setTransaction(JSON.parse(stored));
    } catch (error) {
      console.error('Error loading transactions:', error);
      setTransaction([]);
    }
  } else {
    setTransaction([]);
  }
}, [user]);

// Save to localStorage whenever transactions change
useEffect(() => {
  const storageKey = getStorageKey();
  localStorage.setItem(storageKey, JSON.stringify(transactions));
}, [transactions, user]);

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