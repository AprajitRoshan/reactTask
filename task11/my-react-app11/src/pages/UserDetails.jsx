import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.log("Error:", error));
    }, [id]);

    if (!user) {
        return <h2 className="loading">Loading...</h2>;
    }

    return (
        <div className="page">
            <h1>User Details</h1>


            <div className="details-card">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>

                <h3>Address</h3>
                <p><strong>Street:</strong> {user.address.street}</p>
                <p><strong>Suite:</strong> {user.address.suite}</p>
                <p><strong>City:</strong> {user.address.city}</p>
                <p><strong>Zip Code:</strong> {user.address.zipcode}</p>
            </div>
        </div>
    );
}

export default UserDetails;