import { useState, useEffect } from "react";

function Timer() {
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    const startTime = Date.now(); // record start timestamp

    const interval = setInterval(() => {
      setElapsedMs(Date.now() - startTime);
    }, 10); // update every 10ms for smooth display

    return () => clearInterval(interval);
  }, []);

  // Convert milliseconds to seconds with 3 decimal places
  const displaySeconds = (elapsedMs / 1000).toFixed(3);

  return <div className="timer">Time elapsed: {displaySeconds} s</div>;
}

export default Timer;
