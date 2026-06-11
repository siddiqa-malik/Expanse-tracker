import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-emerald-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-emerald-600">
          Expense Tracker
        </h1>

        <div className="flex gap-3">
          <NavLink to="/" className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/add-transaction" className={linkClass}>
            Add Transaction
          </NavLink>

          <NavLink to="/transactions" className={linkClass}>
            Transactions
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;