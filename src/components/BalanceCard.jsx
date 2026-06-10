import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function BalanceCard() {
  const { balance } = useContext(ExpenseContext);

  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid black",
        marginBottom: "10px",
      }}
    >
      <h2>Current Balance</h2>
      <h1
        style={{
          color: balance >= 0 ? "green" : "red",
        }}
      >
        {balance}
      </h1>
    </div>
  );
}

export default BalanceCard;