import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCourses, setShowCourses] = useState(true);

  const courses = [
    { id: 1, name: "React JS", duration: "2 Months", level: " Beginner" },
    { id: 2, name: "JavaScript", duration: "1 Month", level: " Beginner" },
    { id: 3, name: "Node JS", duration: "2 Months", level: " Intermediate" },
    { id: 4, name: "MongoDB", duration: "1 Months", level: "Intermediate" },
    { id: 5, name: "Express JS", duration: "1 Months", level: "Intermediate" },
  ];

  return (
    <div className="app">
      <h1>Conditional Rendering & List Rendering</h1>

      <div className="section">
        <h2>Conditional Rendering</h2>

        {isLoggedIn ? (
          <p className="success">Welcome back, User!</p>
        ) : (
          <p className="warning">Please login to continue.</p>
        )}

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      <div className="section">
        <h2>List Rendering</h2>

        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? "Hide Courses" : "Show Courses"}
        </button>

        {showCourses && (
          <div className="card-container">
            {courses.map((course) => (
              <div className="card" key={course.id}>
                <h3>{course.name}</h3>
                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p><strong>Level:</strong>{course.level}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;