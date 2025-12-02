import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

import DisplayCursorCircle from "./DisplayCursorCircle";
import Timer from "./Timer";

function DisplayPuzzle() {
  const [puzzle, setPuzzle] = useState(null);
  const { puzzleId } = useParams();
  const start = Date.now();
  const [gameFinished, setGameFinished] = useState(false);

  const imageMap = {
    puzzle01: "/bruegel1.jpg",
    puzzle02: "/bruegel2.jpg",
    puzzle03: "/const.jpg",
  };

  useEffect(() => {
    async function fetchPostData() {
      // const link = "http://localhost:3000";
      const link = "https://where-is-waldo-backend-5hcc.onrender.com";

      const response = await fetch(`${link}/puzzle/${puzzleId}`);

      const responseJson = await response.json();
      setPuzzle(responseJson);
    }

    fetchPostData();
  }, [puzzleId]);

  const image = imageMap[puzzleId];

  if (!puzzle) {
    return <div className="post">Loading or Post not found...</div>;
  }

  return (
    <>
      <div className="puzzle">
        <Timer stopped={gameFinished} />

        <img src={image} alt="" className="puzzle-img" />
        <DisplayCursorCircle
          puzzle={puzzle}
          start={start}
          onGameFinish={() => setGameFinished(true)}
        />
      </div>
    </>
  );
}

export default DisplayPuzzle;
