import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function SummaryCard() {
  const { income, expense } = useContext(ExpenseContext);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          padding: "10px",
          border: "1px solid green",
        }}
      >
        <h3>Income</h3>
        <h2 style={{ color: "green" }}>
          +{income}
        </h2>
      </div>

      <div
        style={{
          padding: "10px",
          border: "1px solid red",
        }}
      >
        <h3>Expense</h3>
        <h2 style={{ color: "red" }}>
          -{expense}
        </h2>
      </div>
    </div>
  );
}

export default SummaryCard;