import { useSearchParams } from "react-router-dom";

function Users() {
    const users = [
        { id: 1, name: "John", email: "john@gmail.com", role: "Developer", location: "New York" },
        { id: 2, name: "Emma", email: "emma@gmail.com", role: "Designer", location: "London" },
        { id: 3, name: "Sophia", email: "sophia@gmail.com", role: "HR", location: "Paris" },
        { id: 4, name: "Alex", email: "alex@gmail.com", role: "Tester", location: "Berlin" },
        { id: 5, name: "David", email: "david@gmail.com", role: "Manger", location: "Toronto" },
        { id: 6, name: "Mike", email: "mike@gmail.com", role: "Developer", location: "Sydney" },
        { id: 7, name: "Sara", email: "sara@gmail.com", role: "Tester", location: "Dubai" },
        { id: 8, name: "Chris", email: "chris@gmail.com", role: "HR", location: "Rome" },
        { id: 9, name: "Anna", email: "anna@gmail.com", role: "Designer", location: "Madrid" },
        { id: 10, name: "Tom", email: "tom@gmail.com", role: "Manager", location: "Tokyo" },
        { id: 11, name: "Ryan", email: "ryan@gmail.com", role: "Developer", location: "Delhi" },
        { id: 12, name: "Olivia", email: "olivia@gmail.com", role: "Designer", location: "Mumbai" },
        { id: 13, name: "James", email: "james@gmail.com", role: "Tester", location: "Chennai" },
        { id: 14, name: "Ella", email: "ella@gmail.com", role: "HR", location: "Pune" },
        { id: 15, name: "Daniel", email: "daniel@gmail.com", role: "Manager", location: "Hyderabad" },
        { id: 16, name: "Liam", email: "liam@gmail.com", role: "Developer", location: "Bangalore" },
        { id: 17, name: "Grace", email: "grace@gmail.com", role: "Tester", location: "Kolkata" },
        { id: 18, name: "Henry", email: "henry@gmail.com", role: "Designer", location: "Jaipur" },
        { id: 19, name: "Ava", email: "ava@gmail.com", role: "HR", location: "Lucknow" },
        { id: 20, name: "Noah", email: "noah@gmail.com", role: "Manager", location: "Patna" },
    ];

    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;

    const recordsPerPage = 5;

    const startIndex = (currentPage - 1) * recordsPerPage;

    const currentUsers = users.slice(
        startIndex,
        startIndex + recordsPerPage
    );

    const totalPages = Math.ceil(users.length / recordsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setSearchParams({ page: currentPage + 1 });
        }
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setSearchParams({ page: currentPage - 1 });
        }
    };

    return (
        <div className="container">
            <h1>User Pagination</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Location</th>
                    </tr>
                </thead>

                <tbody>
                    {currentUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button
                    onClick={previousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Users;