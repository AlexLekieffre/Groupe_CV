import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// le dossier Molecules que vous avez créer est en Majuscule donc , il faut le mettre en maj pour l'importer
//import Skills from "../components/Molecules/expérience/";
//import UserProfile from "../components/Molecules/userProfil";

const CV = () => {
  return (
    <Router>
      <div class="navBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about"> Expérience</Link>
            </li>
            <li>
              <Link to="/users">Compétence</Link>
            </li>
          </ul>
        </nav>
        renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default CV;
