import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function SubmitScore({ score }) {
  const [username, setUsername] = useState("");
  const { puzzleId } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      score: score,
      leaderboardId: puzzleId.charAt(puzzleId.length - 1),
    };

    try {
      const link = "http://localhost:3000";

      await fetch(`${link}/puzzle/${puzzleId}/leaderboard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      navigate("/leaderboards");
    } catch (error) {
      console.error("Error while submitting score:", error);
    }
  };

  return (
    <div className="submit-score-fullscreen">
      <form onSubmit={handleSubmit} className="submit-score">
        <h2>Congratulations! Your score is {score}</h2>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          placeholder="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
          autoFocus
        />
        <button type="submit">Submit your score</button>
      </form>
    </div>
  );
}

export default SubmitScore;
