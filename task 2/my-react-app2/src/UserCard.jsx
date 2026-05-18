function UserCard(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>

            <p>
                <strong>Age:</strong> {props.age}
            </p>

            <p>
                <strong>City:</strong> {props.city}
            </p>
        </div>
    );
}

export default UserCard;