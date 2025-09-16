// src/pages/Login.js
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setLoginError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email address";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate login check (replace with real API in production)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      setLoginError("No account found. Please signup first.");
      return;
    }

    if (
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      setUser(storedUser);

      // Role-based redirect
      switch (storedUser.role) {
        case "admin":
          navigate("/admin");
          break;
        case "owner":
          navigate("/owner");
          break;
        default:
          navigate("/user");
      }
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        {loginError && <span className="error">{loginError}</span>}

        <button type="submit">Login</button>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
