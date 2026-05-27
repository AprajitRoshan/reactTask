function Profile() {
  return (
    <div>
      <h1>My Profile</h1>

      <div className="card" style={{ marginTop: 24 }}>
        <h2>Aprajit Roshan</h2>
        <p style={{ marginTop: 6 }}>Frontend Developer</p>
        <p style={{ marginTop: 6, color: '#777' }}>
          Building React apps and learning new things every day.
        </p>
      </div>

      <div className="card">
        <h2>Skills</h2>
        <p style={{ marginTop: 8 }}>React, JavaScript, HTML, CSS, Git</p>
      </div>
    </div>
  )
}

export default Profile
