import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function BalanceCard() {
  const { balance } = useContext(ExpenseContext);

  return (
    <div className={`mb-6 rounded-3xl p-10 shadow-2xl text-white transform transition hover:scale-105 ${
      balance >= 0 
        ? 'bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600' 
        : 'bg-gradient-to-br from-orange-400 via-orange-500 to-red-600'
    }`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold opacity-90 mb-3 uppercase tracking-wide">Current Balance</p>
          <h1 className="text-7xl font-bold mb-4 font-mono">
            ₹{Math.abs(balance).toLocaleString()}
          </h1>
          <p className={`text-sm font-bold opacity-90 ${balance >= 0 ? 'text-emerald-100' : 'text-red-100'}`}>
            {balance >= 0 ? '✓ Positive Balance' : '⚠ Negative Balance'}
          </p>
        </div>
        <span className="text-8xl opacity-20">
          {balance >= 0 ? '💎' : '⚠️'}
        </span>
      </div>
    </div>
  );
}

export default BalanceCard;