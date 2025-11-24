import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState } from "react";

import "normalize.css";

import "./App.css";

import Home from "./components/home";
import DisplayPuzzle from "./components/DisplayPuzzle";
import Leaderboards from "./components/Leaderboards";
import SubmitScore from "./components/SubmitScore";

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
        {/* <Route path="/puzzle/:puzzleId/submitScore" element={<SubmitScore />} /> */}

        {/* <Route
          path="/puzzle/test"
          element={<DisplayPuzzle image="/bruegel.jpg" />}
        />
        <Route
          path="/puzzle/puzzle2"
          element={<DisplayPuzzle image="/bruegel2.jpg" />}
        />

        <Route path="/puzzle3" element={<DisplayPuzzle image="/const.jpg" />} /> */}
      </Routes>

      <footer>
        <p>Made by Djotajo</p>
      </footer>
    </>
  );
}

export default App;
