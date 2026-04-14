export type Game = {
  image: string;
  name: string;
};

export default function Games({
  games,
  text,
}: {
  games: Game[];
  text: string;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="mt-6 text-lg/8 text-gray-600">{text}</p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none"
      >
        {games.map((game: Game) => (
          <li key={game.name}>
            <img
              alt={game.name}
              src={`/assets/${game.image}`}
              height={100}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
