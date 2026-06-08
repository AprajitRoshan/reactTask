import { useState, useEffect } from "react";

function GameForm({ addGame, updateGame, editingGame }) {

    const [game, setGame] = useState({
        title: "",
        genre: "",
        platform: "",
        rating: "",
        status: ""
    });

    useEffect(() => {
        if (editingGame) {
            setGame(editingGame);
        }
    }, [editingGame]);

    const handleChange = (e) => {
        setGame({
            ...game,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingGame) {
            updateGame(game);
        } else {
            addGame(game);
        }

        setGame({
            title: "",
            genre: "",
            platform: "",
            rating: "",
            status: ""
        });
    };

    return (
        <form
            className="game-form"
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                name="title"
                placeholder="game Title"
                value={game.title}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="rating"
                placeholder="Rating"
                value={game.rating}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="status"
                placeholder="Status"
                value={game.status}
                onChange={handleChange}
                required
            />

            <button>
                {editingGame ? "Update Game" : "Add Game"}
            </button>

        </form>
    );
}

export default GameForm;