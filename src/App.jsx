import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">Logo</div>
      <div className="nav-menu">
        <a href="#">Home</a>
        <a href="#">How It Works</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <button className="create-btn " onClick={() => setMenuOpen(false)}>
          Create Account
        </button>
      </div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "X" : "≡"}
      </button>
    </nav>
  );
}

export default App;
