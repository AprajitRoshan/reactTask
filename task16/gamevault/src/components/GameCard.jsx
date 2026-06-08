function GameCard({ game, onEdit, onDelete }) {
    return (
        <div className="game-card">

            <h3>{game.title}</h3>

            <p>
                <strong>Genre:</strong> {game.genre}
            </p>

            <p>
                <strong>Platform:</strong> {game.platform}
            </p>

            <p>
                <strong>Rating:</strong> ⭐ {game.rating}/10
            </p>

            <p>
                <strong>Status:</strong> {game.status}
            </p>

            <div className="card-buttons">
                <button
                    className="edit-btn"
                    onClick={() => onEdit(game)}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(game.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default GameCard;