import DisplayCursorCircle from "./DisplayCursorCircle";

function DisplayPuzzle() {
  return (
    <>
      <div className="puzzle">
        <img src="/alex.jpg" alt="" className="puzzle-img" />
      </div>
      <DisplayCursorCircle />
    </>
  );
}

export default DisplayPuzzle;
