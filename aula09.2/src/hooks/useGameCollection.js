import { useState, useEffect } from "react";
import { jogos as jogosIniciais } from "../data/jogos";

export default function useGameCollection() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (storedGames) {
      return JSON.parse(storedGames);
    }
    return jogosIniciais;
  });

  useEffect(() => {
    localStorage.setItem("obc-game-lib", JSON.stringify(games));
  }, [games]);

  const addGame = ({ title, cover }) => {
    const newGame = {
      id: Math.floor(Math.random() * 1000000),
      title,
      coverImage: cover,
      releaseYear: new Date().getFullYear(),
      description: "Jogo adicionado pelo utilizador."
    };
    setGames((state) => [...state, newGame]);
  };

  const removeGame = (id) => {
    setGames((state) => state.filter((game) => game.id !== id));
  };

  return { games, addGame, removeGame };
}