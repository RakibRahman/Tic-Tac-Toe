import React from "react";
import { Board } from "./Board";
interface Props {
  board: string[];
  handleClick(index: number): void;
}
export const Game = ({ board, handleClick }: Props) => {
  return (
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
  );
};
