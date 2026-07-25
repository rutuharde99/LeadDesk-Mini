import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (

    <nav className="navbar">

      <div className="logo">
        LeadDesk Mini
      </div>

      <ul className="nav-links">

        <li><a href="#">Home</a></li>

        <li><a href="#">Features</a></li>

        <li><a href="#">About</a></li>

        <li><a href="#">Contact</a></li>

      </ul>

      <button
  className="login-btn"
  onClick={() => {
    alert("Button Clicked");
    navigate("/login");
  }}
>
  Login
</button>

    </nav>

  );

}

export default Navbar;