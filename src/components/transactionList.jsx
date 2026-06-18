import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useContext(ExpenseContext);
  
  const sortedTransactions = [...transactions].reverse();
  
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Recent Transactions</h2>
          <p className="text-gray-500 text-sm mt-1">Your latest financial activity</p>
        </div>
        <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold border-2 border-emerald-200">
          📊 {transactions.length}
        </span>
      </div>
      
      {transactions.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-gray-500 text-lg font-semibold">No transactions yet.</p>
          <p className="text-gray-400 text-sm mt-2">Start by adding your first income or expense!</p>
        </div>
      ) : (
        <div className="space-y-3">
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