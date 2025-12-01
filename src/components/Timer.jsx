import { useState, useEffect } from "react";

function Timer({ stopped }) {
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    if (stopped) return;

    const startTime = Date.now() - elapsedMs;

    const interval = setInterval(() => {
      setElapsedMs(Date.now() - startTime);
    }, 10);

    return () => clearInterval(interval);
  }, [stopped]);

  return (
    <div className="timer">Time elapsed: {(elapsedMs / 1000).toFixed(3)} s</div>
  );
}

export default Timer;
