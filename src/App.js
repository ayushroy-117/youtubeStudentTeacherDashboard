import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TeacherPage from "./components/TeacherPage";
import StudentPage from "./components/StudentPage";
import "./styles/homepage.css";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="app-homepage">
        {/* All other content */}

        <div className="App">
          {/* Header */}
          <header className="header"></header>

          {/* Navbar */}
          <nav className={`navbar ${isNavOpen ? "open" : ""}`}>
            <button className="toggle-button" onClick={toggleNav}>
              &#9776;
            </button>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={() => setIsNavOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/student" onClick={() => setIsNavOpen(false)}>
                  Class
                </Link>
              </li>
              <li>
                <Link to="/teacher" onClick={() => setIsNavOpen(false)}>
                  Teacher Login
                </Link>
              </li>
            </ul>
          </nav>

          {/* Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <div className="button-container">
                  <Link to="/student">
                    <button className="student-button-1">
                      <span className="icon">👨‍🎓</span> Student
                    </button>
                  </Link>
                  <Link to="/teacher">
                    <button className="teacher-button-1">
                      <span className="icon">👩‍🏫</span> Teacher
                    </button>
                  </Link>
                </div>
              }
            />
            <Route path="/student" element={<StudentPage />} />
            <Route path="/teacher" element={<TeacherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
