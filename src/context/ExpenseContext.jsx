import { useState, useCallback, useContext, createContext } from "react";

const  ExpenseContext = createContext();

function ExpenseProvider ({children}){
const [transactions,setTransaction] = useState([]);
const addTransaction = useCallback((transactionData) =>{
 const newTransaction = {
    id: Date.now(),
    ...transactionData
}
 setTransaction((prev) => [...prev, newTransaction]);
},[])

 const deleteTransaction = useCallback ((id)=>
{
 setTransaction((prev)=>{
    return prev.filter((transaction)=> transaction.id !== id)
 });
},[])

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