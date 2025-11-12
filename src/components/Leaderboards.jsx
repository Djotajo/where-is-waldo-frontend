import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

function Leaderboards() {
  const [leaderboard, setLeaderboard] = useState(null);
  // const { puzzleId } = useParams();

  useEffect(() => {
    async function fetchPostData() {
      const link = "http://localhost:3000";

      // const response = await fetch(`${link}/puzzle/${puzzleId}/leaderboard`);
      // CHANGE WHEN PUZZLES INSERTED IN DB
      // const response = await fetch(`${link}/puzzle/test`);
      const response = await fetch(`${link}/puzzle/puzzle03/leaderboard`);

      const responseJson = await response.json();
      console.log(responseJson);
      setLeaderboard(responseJson.players.sort((a, b) => a.score - b.score));
    }

    fetchPostData();
  }, []);

  return (
    <>
      <div className="leaderboards-full-page">
        <div className="leaderboards">
          <div className="leaderboard">
            <h3 className="leaderboard-header">Puzzle 1</h3>
            <div className="leaderboard-header">
              {/* map za rezultate rang mjesto, ime igraca i vrijeme */}
            </div>
          </div>
          <div className="leaderboard">
            <h3 className="leaderboard-header">Puzzle 2</h3>
            <div className="leaderboard-header">
              {/* map za rezultate rang mjesto, ime igraca i vrijeme */}
            </div>
          </div>
          <div className="leaderboard">
            <h3 className="leaderboard-header">Puzzle 3</h3>
            <div className="leaderboard-header">
              {leaderboard &&
                leaderboard.map((player) => (
                  <>
                    {" "}
                    <div>
                      {player.username} - {player.score}
                    </div>
                  </>
                ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboards;
