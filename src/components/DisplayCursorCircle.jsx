import { useState, useEffect } from "react";

function DisplayCursorCircle({ puzzle }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [characters, setCharacters] = useState(puzzle.characters);

  //   useEffect(() => {
  //     const handleMouseMove = (event) => {
  //       setPosition({ x: event.pageX, y: event.pageY });
  //       setVisible((prev) => !prev);
  //       console.log(position);
  //       console.log(characters);
  //     };

  //     window.addEventListener("click", handleMouseMove);

  //     return () => {
  //       window.removeEventListener("click", handleMouseMove);
  //     };
  //   }, [position]);

  useEffect(() => {
    const handleMouseClick = (event) => {
      const img = document.querySelector("img"); // or use a ref if you have one
      if (!img) return;

      const rect = img.getBoundingClientRect();

      // Coordinates relative to the image
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Update state
      setPosition({ x, y });

      // Toggle visibility or handle whatever logic you want
      setVisible((prev) => !prev);

      console.log("Relative position:", { x, y });
      console.log("Characters:", characters);
    };

    window.addEventListener("click", handleMouseClick);

    // Cleanup
    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [characters]);

  return (
    <>
      {visible && (
        <>
          <div
            style={{
              position: "absolute",
              left: position.x + 10, // offset so it doesn’t sit directly under cursor
              top: position.y + 10,
              width: 50,
              height: 50,
              borderRadius: "50%",
              pointerEvents: "none", // allows clicking through the div
              transform: "translate(-50%, -50%)", // optional: center on cursor
            }}
            className="cursor-circle"
          ></div>
          <div
            style={{
              position: "absolute",
              left: position.x + 40, // offset so it doesn’t sit directly under cursor
              top: position.y - 10,
              //   width: 50,
              //   height: 50,
              //   borderRadius: "50%",
              //   pointerEvents: "none", // allows clicking through the div
              //   transform: "translate(-50%, -50%)", // optional: center on cursor
            }}
            className="cursor-square"
          >
            <div className="cursor-square-image">
              <img src={characters[0].image} alt="" />
            </div>
            <div className="cursor-square-name">{characters[0].name}</div>
          </div>
          <div
            style={{
              position: "absolute",
              left: position.x + 40, // offset so it doesn’t sit directly under cursor
              top: position.y + 40,
              //   width: 50,
              //   height: 50,
              //   borderRadius: "50%",
              //   pointerEvents: "none", // allows clicking through the div
              //   transform: "translate(-50%, -50%)", // optional: center on cursor
            }}
            className="cursor-square"
          >
            <div className="cursor-square-image">
              <img src={characters[1].image} alt="" />
            </div>
            <div className="cursor-square-name">{characters[1].name}</div>
          </div>
          <div
            style={{
              position: "absolute",
              left: position.x + 40, // offset so it doesn’t sit directly under cursor
              top: position.y + 90,
              //   width: 50,
              //   height: 50,
              //   borderRadius: "50%",
              //   pointerEvents: "none", // allows clicking through the div
              //   transform: "translate(-50%, -50%)", // optional: center on cursor
            }}
            className="cursor-square"
          >
            <div className="cursor-square-image">
              {" "}
              <img src={characters[2].image} alt="" />
            </div>
            <div className="cursor-square-name">{characters[2].name}</div>
          </div>
        </>
      )}
    </>
  );
}

export default DisplayCursorCircle;
