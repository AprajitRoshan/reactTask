import { NavLink, Outlet } from 'react-router-dom'
import './Services.css'

function ServicesLayout() {
  const linkClass = ({ isActive }) => isActive ? 'sub-link active' : 'sub-link'

  return (
    <div>
      <h1>Services</h1>
      <p style={{ marginTop: 10 }}>Choose a service to learn more.</p>

      {/* Sub navigation for nested routes */}
      <nav className="sub-nav">
        <NavLink to="/services"                end className={linkClass}>All</NavLink>
        <NavLink to="/services/web-development"    className={linkClass}>Web Development</NavLink>
        <NavLink to="/services/app-development"    className={linkClass}>App Development</NavLink>
        <NavLink to="/services/ui-ux-design"       className={linkClass}>UI/UX Design</NavLink>
      </nav>

      {/* Child route renders here */}
      <Outlet />
    </div>
  )
}

export default ServicesLayout
