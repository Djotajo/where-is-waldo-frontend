import DisplayCursorCircle from "./DisplayCursorCircle";

function DisplayPuzzle({ image }) {
  return (
    <>
      <div className="puzzle">
        <img src={image} alt="" className="puzzle-img" />
      </div>
      <DisplayCursorCircle />
    </>
  );
}

export default DisplayPuzzle;
