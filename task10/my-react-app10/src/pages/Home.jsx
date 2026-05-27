function Home() {
  return (
    <div>
      <h1>Welcome to MyApp 👋</h1>
      <p style={{ marginTop: 10 }}>
        This is a React app demonstrating Routing and Nested Routing
        using React Router DOM v6.
      </p>

      <div className="card" style={{ marginTop: 24 }}>
        <h2>What's covered</h2>
        <ul style={{ marginTop: 10, paddingLeft: 20, color: '#555', lineHeight: 2 }}>
          <li>5 pages with React Router DOM</li>
          <li>Active link highlighting in Navbar</li>
          <li>Nested routing under Services</li>
          <li>Outlet for rendering child routes</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
