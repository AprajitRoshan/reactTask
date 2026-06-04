import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API_URL = " https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error:", error));
  }


  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.name.trim() === "" || formData.email.trim === "") {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      updateUser();
    } else {
      createUser();
    }
  }

  function createUser() {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newUser) => {
        setUsers([...users, newUser]);

        setFormData({
          name: "",
          email: "",
        });
      })
      .catch((error) => console.log("Error:", error));
  }

  function handleEdit(user) {
    setEditId(user.id);

    setFormData({
      name: user.name,
      email: user.email,
    });
  }

  function updateUser() {
    fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editId,
        name: formData.name,
        email: formData.email,
      }),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        const updatedUsers = users.map((user) =>
          user.id === editId ? updatedUser : user
        );

        setUsers(updatedUsers);

        setFormData({
          name: "",
          email: "",
        });

        setEditId(null);
      })
      .catch((error) => console.log("Error:", error));
  }

  function deleteUser(id) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const filteredUsers = users.filter((user) => user.id !== id);
        setUsers(filteredUsers);
      })
      .catch((error) => console.log("Error:", error));
  }

  return (
    <div className="app">
      <h1>CRUD Operations with API</h1>

      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">
          {editId ? "Update User" : "Add User"}
        </button>
      </form>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
