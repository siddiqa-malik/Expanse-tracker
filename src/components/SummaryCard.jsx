import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function SummaryCard() {
  const { income, expense } = useContext(ExpenseContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-emerald-500   rounded-3xl p-8 shadow-2xl text-white transform transition hover:scale-105">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-bold text-green-100 mb-2 uppercase tracking-wide"> Total Income</p>
            <h2 className="text-5xl font-bold font-mono">+₹{income.toLocaleString()}</h2>
            <p className="text-green-100 text-xs mt-3 font-medium">All time earnings</p>
          </div>
          <span className="text-6xl opacity-20">💵</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-400 via-red-500 to-orange-600 rounded-3xl p-8 shadow-2xl text-white transform transition hover:scale-105">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-bold text-red-100 mb-2 uppercase tracking-wide">Total Expense</p>
            <h2 className="text-5xl font-bold font-mono">-₹{expense.toLocaleString()}</h2>
            <p className="text-red-100 text-xs mt-3 font-medium">All time spending</p>
          </div>
          <span className="text-6xl opacity-20">💳</span>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;