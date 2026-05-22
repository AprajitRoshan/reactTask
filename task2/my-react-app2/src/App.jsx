import UserCard from "./UserCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>User Details</h1>

      <UserCard name="Kamal" age="25" city="Salem" />

      <UserCard name="Arun" age="24" city="Chennai" />

      <UserCard name="Hari" age="23" city="Coimbatore" />

      <UserCard name="Rahul" age="26" city="Bangalore" />

      <UserCard name="Vijay" age="22" city="Hyderabad" />
    </div>
  );
}

export default App;