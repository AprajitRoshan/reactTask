import { useEffect, useState } from 'react';
import "./App.css";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div className="app">
      <h1>User Details from API</h1>

      <div className="card-container">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>website:</strong> {user.wesite}
            </p>
            <p>
              <strong>City</strong> {user.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;