import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useContext(ExpenseContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        border: "1px solid gray",
        marginBottom: "10px",
      }}
    >
      <div>
        <h4>{transaction.title}</h4>
        <p>{transaction.type}</p>
      </div>

      <div>
        <h3
          style={{
            color:
              transaction.type === "income"
                ? "green"
                : "red",
          }}
        >
          {transaction.type === "income" ? "+" : "-"}
          {transaction.amount}
        </h3>

        <button
          onClick={() =>
            deleteTransaction(transaction.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;