import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/experience"> Expérience</Link>
          </li>
          <li>
            <Link to="/skills">Compétence</Link>
          </li>
          <li>
            <Link to="/contact">Contactez-Nous</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
