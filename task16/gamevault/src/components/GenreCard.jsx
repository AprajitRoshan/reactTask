function GenreCard({ genre }) {
    return (
        <div className="genre-card">

            <h3>{genre}</h3>

            <p>
                Explore amazing {genre} games.
            </p>


        </div>
    );
}

export default GenreCard;