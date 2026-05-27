import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import ServicesLayout from './pages/Services/ServicesLayout'
import ServicesHome from './pages/Services/ServicesHome'
import WebDevelopment from './pages/Services/WebDevelopment'
import AppDevelopment from './pages/Services/AppDevelopment'
import UIUXDesign from './pages/Services/UIUXDesign'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />

          {/* Nested Routes */}
          <Route path="/services" element={<ServicesLayout />}>
            <Route index                   element={<ServicesHome />} />
            <Route path="web-development"  element={<WebDevelopment />} />
            <Route path="app-development"  element={<AppDevelopment />} />
            <Route path="ui-ux-design"     element={<UIUXDesign />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
