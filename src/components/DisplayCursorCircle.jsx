import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubmitScore from "./SubmitScore";

function DisplayCursorCircle({ puzzle, start, onGameFinish }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [characters, setCharacters] = useState(
    puzzle.characters.sort((a, b) => Number(a.id) - Number(b.id))
  );
  const [guesses, setGuesses] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const [message, setMessage] = useState("");

  const handleWrongGuess = () => {
    setMessage("Wrong!");
    setTimeout(() => setMessage(""), 2000);
  };

  useEffect(() => {
    const handleMouseClick = (event) => {
      const img = document.querySelector("img");
      if (!img) return;

      const rect = event.target.getBoundingClientRect();
      const x = event.pageX - rect.left - window.scrollX;
      const y = event.pageY - rect.top - window.scrollY;

      setPosition({ x, y });

      setVisible((prev) => !prev);
    };

    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [characters]);

  const calculateGuess = (clickPosition, charPosition, index) => {
    const img = document.querySelector("img");

    if (
      clickPosition.x >= charPosition.x * img.clientWidth - 20 &&
      clickPosition.x <= charPosition.x * img.clientWidth + 20 &&
      clickPosition.y >= charPosition.y * img.clientHeight - 20 &&
      clickPosition.y <= charPosition.y * img.clientHeight + 20
    ) {
      setGuesses((prev) => {
        const newGuesses = [...prev, { index, pos: clickPosition }];
        if (newGuesses.length === 3) {
          const finish = Date.now();
          setScore(finish - start);
          setCompleted(true);

          onGameFinish();
        }
        return newGuesses;
      });
    } else {
      handleWrongGuess();
    }
    return;
  };

  return (
    <>
      {completed && <SubmitScore score={score} />}
      {message && <div className="guess-message">{message}</div>}

      {guesses.map((guess) => (
        <div
          key={guess.index}
          style={{
            position: "absolute",
            left: guess.pos.x,
            top: guess.pos.y,
            width: 50,
            height: 50,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            border: "3px solid limegreen",
            color: "red",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
          className="correct-guess"
        >
          X
        </div>
      ))}
      {visible && (
        <>
          <div
            style={{
              position: "absolute",
              left: position.x,
              top: position.y,
              width: 50,
              height: 50,
              borderRadius: "50%",
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
            }}
            className="cursor-circle"
          ></div>
          <button
            style={{
              position: "absolute",
              left: position.x + 40,
              top: position.y - 10,
              display: guesses.some((g) => g.index === 0) ? "none" : "flex",
            }}
            className="cursor-square"
            onClick={() =>
              calculateGuess(position, characters[0].coordinates, 0)
            }
          >
            <span className="cursor-square-image">
              <img src={characters[0].image} alt="" />
            </span>
            <span className="cursor-square-name">{characters[0].name}</span>
          </button>
          <button
            style={{
              position: "absolute",
              left: position.x + 40,
              top: position.y + 80,

              display: guesses.some((g) => g.index === 1) ? "none" : "flex",
            }}
            className="cursor-square"
            onClick={() =>
              calculateGuess(position, characters[1].coordinates, 1)
            }
          >
            <span className="cursor-square-image">
              <img src={characters[1].image} alt="" />
            </span>
            <span className="cursor-square-name">{characters[1].name}</span>
          </button>
          <button
            style={{
              position: "absolute",
              left: position.x + 40,
              top: position.y + 170,

              display: guesses.some((g) => g.index === 2) ? "none" : "flex",
            }}
            className="cursor-square"
            onClick={() =>
              calculateGuess(position, characters[2].coordinates, 2)
            }
          >
            <span className="cursor-square-image">
              {" "}
              <img src={characters[2].image} alt="" />
            </span>
            <span className="cursor-square-name">{characters[2].name}</span>
          </button>
        </>
      )}
    </>
  );
}

export default DisplayCursorCircle;
