import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState } from "react";

import "normalize.css";

import "./App.css";

import Home from "./components/home";
import DisplayPuzzle from "./components/DisplayPuzzle";
import Leaderboards from "./components/Leaderboards";

function App() {
  return <AppContent />;
}

function AppContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <h1>Where are random renaissance people</h1>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/leaderboards" onClick={() => setIsOpen(false)}>
              Leaderboards
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/puzzle/:puzzleId" element={<DisplayPuzzle />} />
      </Routes>

      <footer>
        <p>Made by Djotajo</p>
      </footer>
    </>
  );
}

export default App;
