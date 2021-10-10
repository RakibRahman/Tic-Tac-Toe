import { Board } from "./Board";
import { PlayerTurn } from "./Turn";
interface Props {
  board: string[];
  turn: string;
  players: string[];
  handleClick(index: number): void;
}
export const Game = ({ board, handleClick, turn, players }: Props) => {
  return (
    <>
      <PlayerTurn turn={turn} players={players} />

      <div className="game-board">
        {board.map((value, index) => (
          <Board
            key={index}
            value={value}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};
