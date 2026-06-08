import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>🎮 GameVault</h2>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/games">Games</NavLink>
                <NavLink to="/genres">Genres</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;