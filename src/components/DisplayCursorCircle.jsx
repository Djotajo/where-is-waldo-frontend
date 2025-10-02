import { useState, useEffect } from "react";

function DisplayCursorCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
      setVisible((prev) => !prev);
    };

    // Attach event listener
    window.addEventListener("click", handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("click", handleMouseMove);
    };
  }, []);

  return (
    <>
      {visible && (
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
      )}
    </>
  );
}

export default DisplayCursorCircle;
