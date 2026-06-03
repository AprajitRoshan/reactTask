import useFetchData from "./hooks/useFetchData";
import "./App.css";

function App() {
  const { data, loading, error } = useFetchData(
    "https://dummyjson.com/users"
  );

  if (loading) {
    return <h2 className="message">Loading...</h2>
  }

  if (error) {
    return <h2 className="message error">Error: {error}</h2>;
  }

  return (
    <div className="app">
      <h1>User Data Table</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;