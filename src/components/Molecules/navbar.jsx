import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <Link id="Link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="Link" to="/experience">
              {' '}
              Expériences
            </Link>
          </li>
          <li>
            <Link id="Link" to="/skills">
              Compétences
            </Link>
          </li>
          <li>
            <Link id="Link" to="/contact">
              Contactez-Nous
            </Link>
          </li>
          <li>
            <Link id="Link" to="/team">
              L'équipe
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
