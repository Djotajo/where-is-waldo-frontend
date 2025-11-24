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
      const link = "http://localhost:3000";

      const response = await fetch(`${link}/puzzle/${puzzleId}`);
      // CHANGE WHEN PUZZLES INSERTED IN DB
      // const response = await fetch(`${link}/puzzle/test`);

      const responseJson = await response.json();
      console.log(responseJson);
      setPuzzle(responseJson);
    }

    fetchPostData();
  }, [puzzleId]);

  const image = imageMap[puzzleId];
  console.log(window.innerHeight);
  console.log(window.innerWidth);

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
      {/* <DisplayCursorCircle puzzle={puzzle} /> */}

      {/* {post.Comment.map((comment, index) => (
        <article key={comment.id || index} className="full-post-comment">
          <header>
            <cite className="full-post-comment-author">
              {comment.commentByAuthor
                ? comment.commentByAuthor.username
                : comment.commentByUser.username}{" "}
            </cite>
            on{" "}
            <time
              dateTime={comment.createdAt}
              className="full-post-comment-date"
            >
              {new Date(comment.createdAt).toLocaleDateString()}
            </time>
          </header>
          <p className="full-post-comment-content">{comment.text}</p>
        </article>
      ))} */}
    </>
  );
}

export default DisplayPuzzle;
