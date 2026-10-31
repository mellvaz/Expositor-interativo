import useGameCollection from "./hooks/useGameCollection";
import NewGameForm from "./components/NewGameForm";
import Game from "./components/Game";
import "./App.css";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();

  return (
    <main className="app-container">
      <h1 className="page-title">Biblioteca de Jogos</h1>

      <NewGameForm addGame={addGame} />

      <div className="games-grid">
        {games && games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              title={game.title}
              releaseYear={game.releaseYear}
              description={game.description}
              coverImage={game.coverImage || game.cover || ""}
              onRemove={removeGame}
            />
          ))
        ) : (
          <p>Nenhum jogo na coleção.</p>
        )}
      </div>
    </main>
  );
}
