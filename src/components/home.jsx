import DisplayCursorCircle from "./DisplayCursorCircle";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="puzzles-div">
          <Link to={`/puzzle1`} className="puzzle-preview"></Link>
          <Link to={`/puzzle2`} className="puzzle-preview"></Link>
          <Link to={`/puzzle3`} className="puzzle-preview"></Link>
        </div>
      </div>
      <DisplayCursorCircle />
    </>
  );
}

export default Home;
