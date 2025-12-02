import { useEffect, useState } from "react";

function Leaderboards() {
  const [leaderboard01, setLeaderboard01] = useState(null);
  const [leaderboard02, setLeaderboard02] = useState(null);

  const [leaderboard03, setLeaderboard03] = useState(null);

  useEffect(() => {
    async function fetchPostData() {
      // const link = "http://localhost:3000";
      const link = "https://where-is-waldo-backend-5hcc.onrender.com";

      const response = await fetch(`${link}/leaderboards`);

      const responseJson = await response.json();
      setLeaderboard01(
        responseJson[2].players.sort((a, b) => a.score - b.score)
      );
      setLeaderboard02(
        responseJson[1].players.sort((a, b) => a.score - b.score)
      );

      setLeaderboard03(
        responseJson[0].players.sort((a, b) => a.score - b.score)
      );
    }

    fetchPostData();
  }, []);

  return (
    <>
      <div className="leaderboards-full-page">
        <div className="leaderboards">
          <div className="leaderboard">
            <h3 className="leaderboard-header">Puzzle 1</h3>
            <div className="header">
              <p>Place</p>
              <p>Username</p>
              <p>Score</p>
            </div>
            {leaderboard01 &&
              Array.from({ length: 20 }, (_, i) => {
                const player = leaderboard01[i];

                return (
                  <div className="player-score" key={i}>
                    <p>{i + 1} </p>
                    {player ? (
                      <>
                        <p className="player-username">{player.username}</p>
                        <p className="player-score-value">{player.score}</p>
                      </>
                    ) : (
                      <>
                        <p className="player-username">&nbsp;</p>
                        <p className="player-score-value">&nbsp;</p>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
          <div className="leaderboard">
            <h3 className="leaderboard-header">Puzzle 2</h3>
            <div className="header">
              <p>Place</p>
              <p>Username</p>
              <p>Score</p>
            </div>
            {leaderboard02 &&
              Array.from({ length: 20 }, (_, i) => {
                const player = leaderboard02[i];

                return (
                  <div className="player-score" key={i}>
                    <p>{i + 1} </p>
                    {player ? (
                      <>
                        <p className="player-username">{player.username}</p>
                        <p className="player-score-value">{player.score}</p>
                      </>
                    ) : (
                      <>
                        <p className="player-username">&nbsp;</p>
                        <p className="player-score-value">&nbsp;</p>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
          <div className="leaderboard">
            <h3 className="leaderboard-header">Puzzle 3</h3>
            <div className="header">
              <p>Place</p>
              <p>Username</p>
              <p>Score</p>
            </div>
            {leaderboard03 &&
              Array.from({ length: 20 }, (_, i) => {
                const player = leaderboard03[i];

                return (
                  <div className="player-score" key={i}>
                    <p>{i + 1} </p>
                    {player ? (
                      <>
                        <p className="player-username">{player.username}</p>
                        <p className="player-score-value">{player.score}</p>
                      </>
                    ) : (
                      <>
                        <p className="player-username">&nbsp;</p>
                        <p className="player-score-value">&nbsp;</p>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboards;
