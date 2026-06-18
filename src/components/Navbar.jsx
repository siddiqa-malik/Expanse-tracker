import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useContext(AuthContext);

  const linkClass = ({ isActive }) =>
    `px-5 py-2 rounded-xl font-semibold transition transform hover:scale-105 ${
      isActive
        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition">
          💰 Expense Tracker
        </h1>

        <div className="flex gap-4 items-center">
          {isAuthenticated && (
            <>
              <div className="text-right mr-2 hidden sm:block">
                <p className="text-sm text-gray-600">Logged in as</p>
                <p className="font-bold text-gray-800">{user?.name}</p>
              </div>
              
              <div className="w-px h-8 bg-gray-300 hidden sm:block"></div>
              
              <NavLink to="/" className={linkClass}>
                Dashboard
              </NavLink>

              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition font-bold transform hover:scale-105 active:scale-95"
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;