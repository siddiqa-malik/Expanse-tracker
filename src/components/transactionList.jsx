import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";
import TransactionItem from "./TransactionItem";

function TransactionList() {
    const {transactions} = useContext(ExpenseContext);
     return(
        <div>
            <h2>transaction list</h2>
            {
                transactions.length === 0 ? (<p>No transactions found.</p> ): (transactions.map((transaction) => (
                    <TransactionItem key={transaction.id}
                    transaction={transaction}>
                        
                    </TransactionItem>
                )))}
            </div>
     )};

     export default TransactionList;    