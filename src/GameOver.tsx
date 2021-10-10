interface Props {
  name: string | null;
  handleRestart(): void;
}

export const GameOver = ({ name, handleRestart }: Props) => {
  return (
    <div className="gameover">
      <h1>
        {name && `Player ${name} won the game`}
        {!name && `Its a tie`}
      </h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
