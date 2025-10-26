import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DisplayCursorCircle({ puzzle }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [characters, setCharacters] = useState(
    puzzle.characters.sort((a, b) => Number(a.id) - Number(b.id))
  );
  const [guesses, setGuesses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseClick = (event) => {
      const img = document.querySelector("img"); // or use a ref if you have one
      if (!img) return;

      if (event.target.closest("button.cursor-square")) return;

      const rect = event.target.getBoundingClientRect();
      const x = event.pageX - rect.left - window.scrollX;
      const y = event.pageY - rect.top - window.scrollY;

      console.log(characters);

      setPosition({ x, y });

      setVisible((prev) => !prev);
    };

    window.addEventListener("click", handleMouseClick);

    // Cleanup
    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [characters]);

  const calculateGuess = (clickPosition, charPosition, index) => {
    console.log("calculate guess");
    console.log(clickPosition);
    console.log(charPosition);

    if (
      clickPosition.x >= charPosition.x - 15 &&
      clickPosition.x <= charPosition.x + 15 &&
      clickPosition.y >= charPosition.y - 15 &&
      clickPosition.y <= charPosition.y + 15
    ) {
      console.log("BINGO");

      setGuesses((prev) => {
        const newGuesses = [...prev, { index, pos: clickPosition }];
        if (newGuesses.length === 3) {
          console.log("TOTAL BINGO");

          //   DODATI FORMU ZA UNOS PODATAKA U LEADERBOARD
          navigate("/");
        }
        return newGuesses;
      });
    }
    return;
  };

  return (
    <>
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
              left: position.x, // offset so it doesn’t sit directly under cursor
              top: position.y,
              width: 50,
              height: 50,
              borderRadius: "50%",
              pointerEvents: "none", // allows clicking through the div
              transform: "translate(-50%, -50%)",
            }}
            className="cursor-circle"
          ></div>
          <button
            style={{
              position: "absolute",
              left: position.x + 40, // offset so it doesn’t sit directly under cursor
              top: position.y - 10,
              //   width: 50,
              //   height: 50,
              //   borderRadius: "50%",
              //   pointerEvents: "none", // allows clicking through the div
              //   transform: "translate(-50%, -50%)", // optional: center on cursor
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
              left: position.x + 40, // offset so it doesn’t sit directly under cursor
              top: position.y + 40,
              //   width: 50,
              //   height: 50,
              //   borderRadius: "50%",
              //   pointerEvents: "none", // allows clicking through the div
              //   transform: "translate(-50%, -50%)", // optional: center on cursor
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
              left: position.x + 40, // offset so it doesn’t sit directly under cursor
              top: position.y + 90,
              //   width: 50,
              //   height: 50,
              //   borderRadius: "50%",
              //   pointerEvents: "none", // allows clicking through the div
              //   transform: "translate(-50%, -50%)", // optional: center on cursor
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
