import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const linkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

  return (
    <nav className="navbar">
      <span className="navbar-brand">MyApp</span>
      <div className="navbar-links">
        <NavLink to="/"        end className={linkClass}>Home</NavLink>
        <NavLink to="/about"      className={linkClass}>About</NavLink>
        <NavLink to="/services"   className={linkClass}>Services</NavLink>
        <NavLink to="/contact"    className={linkClass}>Contact</NavLink>
        <NavLink to="/profile"    className={linkClass}>Profile</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
