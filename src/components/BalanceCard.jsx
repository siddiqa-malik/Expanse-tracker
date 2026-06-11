import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function BalanceCard() {
  const { balance } = useContext(ExpenseContext);

  return (
    <div className={`mb-6 rounded-xl p-8 shadow-lg text-white ${
      balance >= 0 
        ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' 
        : 'bg-gradient-to-r from-orange-400 to-orange-600'
    }`}>
      <p className="text-sm font-semibold opacity-90 mb-2">Current Balance</p>
      <h1 className="text-5xl font-bold">
        ₹{balance.toLocaleString()}
      </h1>
      <p className={`text-sm mt-2 opacity-75 ${balance >= 0 ? 'text-emerald-100' : 'text-orange-100'}`}>
        {balance >= 0 ? 'You are in positive balance' : ' You are in negative balance'}
      </p>
    </div>
  );
}

export default BalanceCard;