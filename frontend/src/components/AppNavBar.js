import { NavLink } from "react-router-dom";
import "../pages/styles/AppNavBar.css"; // Make sure you create this file for styles

export default function AppNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/planetlogo.png" alt="planet" className="logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz/start"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/storytelling"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Storytelling
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/game"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Game
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
