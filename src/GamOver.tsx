interface Props {
  name: string | null;
  handleRestart(): void;
}

const GamOver = ({ name, handleRestart }: Props) => {
  return (
    <div>
      <h1>
        {name && `Player ${name} won the game`}
        {!name && `Its a tie`}
      </h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default GamOver;
