import { useMemo, useState, FormEvent } from "react";

interface Props {
  handleStart(players: string[]): void;
}
export const Home = ({ handleStart }: Props) => {
  const [players, setPlayers] = useState(["", ""]);

  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1, event.currentTarget.value);
    setPlayers(newPlayers);
  };
  const canStart = useMemo(
    //enables/disables 'play button'
    // if players are not changed do not re-render
    () => players.every((player) => player && player.length > 0),
    [players]
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canStart) return;
    handleStart(players);
    console.log(players);
  };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="player1">Player 1:</label>
        <input
          type="text"
          id="player1"
          value={players[0]}
          onInput={(e) => handleInput(e, 0)}
        />
        <label htmlFor="player2">Player 2:</label>
        <input
          type="text"
          value={players[1]}
          id="player2"
          onInput={(e) => handleInput(e, 1)}
        />
        <button type="submit" disabled={!canStart}>
          Play
        </button>
      </form>
    </>
  );
};
