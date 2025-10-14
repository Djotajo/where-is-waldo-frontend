import DisplayCursorCircle from "./DisplayCursorCircle";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="puzzles-div">
          <Link to={`/puzzle/test`} className="puzzle-preview"></Link>
          <Link to={`/puzzle/puzzle2`} className="puzzle-preview"></Link>
          {/* <Link
            to={`http://localhost:3000/puzzle/test`}
            className="puzzle-preview"
          ></Link> */}

          <Link to={`/puzzle/puzzle3`} className="puzzle-preview"></Link>
        </div>
      </div>
      <DisplayCursorCircle />
    </>
  );
}

export default Home;
