interface Props {
  players: string[];
  turn: string;
}

export const PlayerTurn = ({ players, turn }: Props) => {
  return (
    <h1 className="turn">
      {turn === "X" ? `Turn of ${players[0]}` : `Turn of ${players[1]}`}{" "}
    </h1>
  );
};
