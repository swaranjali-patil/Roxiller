// src/components/Navbar.js
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDashboard = () => {
    if (!user) {
      navigate("/login");
    } else {
      switch (user.role) {
        case "admin":
          navigate("/admin");
          break;
        case "owner":
          navigate("/owner");
          break;
        default:
          navigate("/user");
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Interns</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {!user && <li><Link to="/login">Login</Link></li>}
        {!user && <li><Link to="/signup">Signup</Link></li>}

        {user && (
          <>
            <li>
              <button onClick={handleDashboard} className="btn dashboard-btn">
                Dashboard
              </button>
            </li>
            <li>
              <button onClick={logout} className="btn logout-btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
