import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>User API App</h2>
            <Link to="/">Home</Link>
        </nav>
    );
}

export default Navbar;