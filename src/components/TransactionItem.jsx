import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useContext(ExpenseContext);
  const isIncome = transaction.type === "income";

  return (
    <div className={`flex items-center justify-between p-5 rounded-2xl border-2 mb-3 shadow-md transition hover:shadow-lg transform hover:scale-102 ${
      isIncome 
        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
        : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200'
    }`}>
      <div className="flex items-center flex-1 gap-4">
        <div className={`p-3 rounded-xl font-bold text-xl ${
          isIncome 
            ? 'bg-green-200 text-green-700' 
            : 'bg-red-200 text-red-700'
        }`}>
          {isIncome ? '📥' : '📤'}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-800 truncate">{transaction.title}</h4>
          <p className={`text-xs font-bold uppercase tracking-wider ${
            isIncome ? 'text-green-600' : 'text-red-600'
          }`}>
            {isIncome ? 'Income' : 'Expense'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 ml-4">
        <h3 className={`text-lg font-bold font-mono whitespace-nowrap ${
          isIncome ? 'text-green-600' : 'text-red-600'
        }`}>
          {isIncome ? '+' : '-'}₹{transaction.amount.toLocaleString()}
        </h3>

        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-3 rounded-lg transition transform hover:scale-110 active:scale-95"
          title="Delete transaction"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;