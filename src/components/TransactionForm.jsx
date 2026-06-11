import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function TransactionForm() {
  const { addTransaction } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    addTransaction({
      title,
      amount: Number(amount),
      type,
    });

    setTitle("");
    setAmount("");
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Transaction</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <input
            type="text"
            placeholder="e.g., Salary, Groceries"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition bg-white"
          >
            <option value="income"> Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg transition transform hover:scale-105 mt-6"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;