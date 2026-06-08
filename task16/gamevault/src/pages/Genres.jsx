import GenreCard from "../components/GenreCard";

function Genres() {

    const genres = [
        "Action Adventure",
        "RPG",
        "Sports",
        "Racing",
        "Stealth",
        "Open world"
    ];

    return (
        <div className="page">

            <h1>Game Genres</h1>

            <div className="genre-grid">

                {genres.map((genre, index) => (
                    <GenreCard
                        key={index}
                        genre={genre}
                    />
                ))}
            </div>
        </div>
    );
}

export default Genres;