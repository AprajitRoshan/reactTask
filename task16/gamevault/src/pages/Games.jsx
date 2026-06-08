import { useState } from "react";

import GameForm from "../components/GameForm";
import GameCard from "../components/GameCard";

function Games() {

    const [games, setGames] = useState([
        {
            id: 1,
            title: "Assassin's Creed 2",
            genre: "Action Adventure",
            platform: "PC",
            rating: 9,
            status: "Playing"
        },
        {
            id: 2,
            title: "FC 26",
            genre: "Sports",
            platform: "PC",
            rating: 8,
            status: "Playing"
        }
    ]);

    const [editingGame, setEditingGame] = useState(null);

    const addGame = (newGame) => {
        setGames([
            ...games,
            {
                ...newGame,
                id: Date.now()
            }
        ]);
    };

    const deleteGame = (id) => {
        setGames(
            games.filter((game) => game.id !== id)
        );
    };

    const editGame = (game) => {
        setEditingGame(game);
    };

    const updateGame = (updatedGame) => {

        setGames(
            games.map((game) =>
                game.id === updatedGame.id
                    ? updatedGame
                    : game
            )
        );

        setEditingGame(null);
    };

    return (
        <div className="page">

            <h1>My Game Library</h1>

            <GameForm
                addGame={addGame}
                updateGame={updateGame}
                editingGame={editingGame}
            />

            <div className="games-grid">

                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        onEdit={editGame}
                        onDelete={deleteGame}
                    />
                ))}
            </div>
        </div>
    );
}

export default Games;