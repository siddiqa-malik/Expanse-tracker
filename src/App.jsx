import SummaryCard from "./components/SummaryCard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import  BalanceCard from "./components/BalanceCard";

function App() {
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
        <SummaryCard />
        <BalanceCard />\    
        <TransactionForm />
        <TransactionList />
    </div>
  );
}

export default App;