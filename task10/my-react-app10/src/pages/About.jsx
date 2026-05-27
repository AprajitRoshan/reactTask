function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p style={{ marginTop: 10 }}>
        We are a team of developers building modern web applications.
      </p>

      <div className="card" style={{ marginTop: 24 }}>
        <h2>Our Mission</h2>
        <p style={{ marginTop: 8 }}>
          To deliver clean, fast, and user-friendly digital products.
        </p>
      </div>

      <div className="card">
        <h2>Our Team</h2>
        <p style={{ marginTop: 8 }}>
          5 developers, 2 designers, and 1 project manager working remotely.
        </p>
      </div>
    </div>
  )
}

export default About
