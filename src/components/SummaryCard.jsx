import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function SummaryCard() {
  const { income, expense } = useContext(ExpenseContext);

  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-6 shadow-lg text-white">
        <p className="text-sm font-semibold text-green-100 mb-2">Total Income</p>
        <h2 className="text-4xl font-bold">+₹{income.toLocaleString()}</h2>
        <p className="text-green-100 text-xs mt-2">All time earnings</p>
      </div>

      <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-xl p-6 shadow-lg text-white">
        <p className="text-sm font-semibold text-red-100 mb-2">Total Expense</p>
        <h2 className="text-4xl font-bold">-₹{expense.toLocaleString()}</h2>
        <p className="text-red-100 text-xs mt-2">All time spending</p>
      </div>
    </div>
  );
}

export default SummaryCard;