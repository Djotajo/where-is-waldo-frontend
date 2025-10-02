import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState } from "react";

import "./App.css";

import Home from "./components/home";
import DisplayPuzzle from "./components/DisplayPuzzle";

function App() {
  return <AppContent />;
}

function AppContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <h1>Where are random renaissance people</h1>
        {/* <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button> */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/leaderboard" onClick={() => setIsOpen(false)}>
              Leaderboard
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<DisplayPuzzle />} />
      </Routes>

      <footer>
        <p>Made by Djotajo</p>
      </footer>
    </>
  );
}

export default App;
