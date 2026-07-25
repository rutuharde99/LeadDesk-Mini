import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await API.post("/auth/login", { email, password });

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      // Save Admin Details
      if (response.data.admin) {
        localStorage.setItem("admin", JSON.stringify(response.data.admin));
      }

      alert("Login Successful");
      navigate("/admin");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Unable to connect to server.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Admin Login</h1>
        <p>Sign in to access LeadDesk Dashboard</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="admin@leaddesk.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Updated button */}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
