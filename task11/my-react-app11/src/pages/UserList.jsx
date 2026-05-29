import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log("Error:", error));
    }, []);

    return (
        <div className="page">
            <h1>User List</h1>


            <div className="user-list">
                {users.map((user) => (
                    <Link to={`/user/${user.id}`} className="user-card" key={user.id}>
                        {user.name}
                    </Link>
                ))}
            </div>
        </div >
    );
}

export default UserList;