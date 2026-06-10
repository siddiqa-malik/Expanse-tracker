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
    <div>
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;