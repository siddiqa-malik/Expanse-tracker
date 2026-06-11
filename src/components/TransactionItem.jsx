import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useContext(ExpenseContext);
  const isIncome = transaction.type === "income";

  return (
    <div className={`flex items-center justify-between p-4 rounded-lg border-l-4 mb-3 shadow-sm transition hover:shadow-md ${
      isIncome 
        ? 'bg-green-50 border-l-green-500' 
        : 'bg-red-50 border-l-red-500'
    }`}>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 mb-1">{transaction.title}</h4>
        <p className={`text-xs font-medium ${
          isIncome ? 'text-green-600' : 'text-red-600'
        }`}>
          {isIncome ? 'Income' : ' Expense'}
        </p>
      </div>

      <div className="text-right">
        <h3 className={`text-lg font-bold mb-2 ${
          isIncome ? 'text-green-600' : 'text-red-600'
        }`}>
          {isIncome ? '+' : '-'}₹{transaction.amount.toLocaleString()}
        </h3>

        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded transition transform hover:scale-105"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;