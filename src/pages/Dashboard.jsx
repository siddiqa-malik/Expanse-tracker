import BalanceCard from "../components/BalanceCard";
import SummaryCard from "../components/SummaryCard";
import TransactionList from "../components/TransactionList";

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your financial overview</p>
      </div>
      
      <BalanceCard />
      <SummaryCard />
      <TransactionList />
    </div>
  );
}

export default Dashboard;