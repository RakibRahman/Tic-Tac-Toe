import React from "react";
interface Props {
  index: number;
  value: string;
  handleClick(index: number): void;
}
const Board = ({ index, value, handleClick }: Props) => {
  return (
    <div>
      <button className="board-btn" onClick={() => handleClick(index)}>
        {value}
      </button>
    </div>
  );
};

export default Board;
