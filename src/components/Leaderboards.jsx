import { Link } from "react-router-dom";

function Leaderboards() {
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
              {/* map za rezultate rang mjesto, ime igraca i vrijeme */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboards;
