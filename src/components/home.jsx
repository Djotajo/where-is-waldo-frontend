import DisplayCursorCircle from "./DisplayCursorCircle";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="puzzles-div">
          <Link to={`/puzzle/puzzle01`} className="puzzle-preview"></Link>
          <Link to={`/puzzle/puzzle02`} className="puzzle-preview"></Link>
          {/* <Link
            to={`http://localhost:3000/puzzle/test`}
            className="puzzle-preview"
          ></Link> */}

          <Link to={`/puzzle/puzzle03`} className="puzzle-preview"></Link>
        </div>
      </div>
      {/* <DisplayCursorCircle /> */}
    </>
  );
}

export default Home;
