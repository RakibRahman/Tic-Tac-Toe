import { useState, useEffect } from "react";

interface ReturnValue {
  board: string[];
  status: string;
  turn: string;
  winner: string | null;
  players: string[];

  handleClick: (index: number) => void;
  handleRestart: () => void;
  handleStart: (players: string[]) => void;
}
const useGameLogic = (): ReturnValue => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [status, setStatus] = useState("created");
  const [players, setPlayers] = useState(["", ""]);

  useEffect(() => {
    if (status === "created") return;
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winningPositionsIndex = 0;
    let winner: String | null = null;

    while (winningPositionsIndex < winningPositions.length && !winner) {
      const boardPositionsToCheck = winningPositions[winningPositionsIndex];
      const boardValuesToCheck = boardPositionsToCheck.map(
        (index) => board[index]
      );
      const checkingValue = boardValuesToCheck[0];
      const isCompleted = boardValuesToCheck.every(
        (value) => value === checkingValue && checkingValue
      );
      winner = !isCompleted ? null : checkingValue;
      winningPositionsIndex++;
    }
    if (winner) {
      setWinner(winner === "X" ? players[0] : players[1]);
      setStatus("finished");
      return;
    }
    setStatus(board.filter((value) => !value).length ? "started" : "finished");
  }, [status, board, players]);

  const handleClick = (index: number): void => {
    if (index < 0 || index > 9 || winner) return;
    const newBoard = [...board];
    newBoard.splice(index, 1, turn);
    setBoard(newBoard);
    const newTurn = turn === "X" ? "O" : "X";

    setTurn(newTurn);
  };
  const handleStart = (players: string[]) => {
    setPlayers(players);
    setTurn("X");
    setStatus("started");
  };
  const handleRestart = () => {
    setBoard(Array(9).fill(""));
    setWinner("");
    setStatus("created");
  };
  return {
    board,
    status,
    winner,
    handleClick,
    handleStart,
    handleRestart,
    turn,
    players,
  };
};
export default useGameLogic;
