import "./App.css";
import { Home } from "./Home";
import { Game } from "./Game";
import { GameOver } from "./GameOver";
import useGameLogic from "./utils/useGameLogic";
export const App = () => {
  const game = useGameLogic();
  return (
    <div className="App">
      {game.status === "created" && <Home handleStart={game.handleStart} />}
      {game.status === "finished" && (
        <GameOver name={game.winner} handleRestart={game.handleRestart} />
      )}
      {game.status === "started" && (
        <Game board={game.board} handleClick={game.handleClick} />
      )}
    </div>
  );
};
