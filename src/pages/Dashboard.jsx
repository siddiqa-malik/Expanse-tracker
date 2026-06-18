import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import BalanceCard from "../components/BalanceCard";
import SummaryCard from "../components/SummaryCard";
import TransactionList from "../components/TransactionList";
import TransactionModal from "../components/TransactionModal";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center animate-slideInUp">
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Welcome back, <span className="text-emerald-600">{user?.name}!</span>
          </h1>
          <p className="text-gray-600 text-lg">Here's your financial overview</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-3 px-8 rounded-xl hover:shadow-xl transition transform hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Add Transaction
        </button>
      </div>
      
      <div className="animate-slideInUp" style={{animationDelay: '0.1s'}}>
        <BalanceCard />
      </div>
      
      <div className="animate-slideInUp" style={{animationDelay: '0.2s'}}>
        <SummaryCard />
      </div>
      
      <div className="animate-slideInUp" style={{animationDelay: '0.3s'}}>
        <TransactionList />
      </div>
      
      <TransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
    
  );
}

export default Dashboard;