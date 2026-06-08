import { Link } from "react-router-dom";

function Home() {
    const featuredGames = [
        {
            id: 1,
            name: "Assassin's Creed 2",
            image:
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
            rating: 9.2,
            released: "2009",
        },
        {
            id: 2,
            name: "Cyberpunk 2077",
            image:
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
            rating: 8.8,
            released: "2020",
        },
        {
            id: 3,
            name: "Forza Horizon",
            image:
                "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80",
            rating: 8.9,
            released: "2021",
        },
    ];

    return (
        <section className="home">
            <div className="hero">
                <div className="hero-content">
                    <h1>Track Your Gaming Journey</h1>

                    <p>
                        Manage your games, track progress, organize genres and build your
                        own personal gaming collection.
                    </p>

                    <Link className="hero-btn" to="/games">
                        Explore Games
                    </Link>
                </div>
            </div>

            <div className="stats-section">
                <div className="stat-card">
                    <h2>50+</h2>
                    <p>Games Tracked</p>
                </div>

                <div className="stat-card">
                    <h2>10+</h2>
                    <p>Genres</p>
                </div>

                <div className="stat-card">
                    <h2>100%</h2>
                    <p>React Project</p>
                </div>
            </div>

            <div className="featured-section">
                <h2>Featured Games</h2>

                <div className="featured-grid">
                    {featuredGames.map((game) => (
                        <div className="featured-card" key={game.id}>
                            <img src={game.image} alt={game.name} />

                            <h3>{game.name}</h3>

                            <p>⭐ Rating: {game.rating}</p>

                            <p>Released: {game.released}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Home;