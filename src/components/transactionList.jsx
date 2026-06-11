import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useContext(ExpenseContext);
  
  const sortedTransactions = [...transactions].reverse();
  
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Transaction History</h2>
        <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
          {transactions.length} Transactions
        </span>
      </div>
      
      {transactions.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No transactions yet.</p>
          <p className="text-gray-400 text-sm mt-2">Start by adding your first income or expense!</p>
        </div>
      ) : (
        <div className="space-y-2">
          {sortedTransactions.map((transaction) => (
            <TransactionItem 
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;    