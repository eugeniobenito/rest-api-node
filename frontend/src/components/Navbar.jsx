import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Eventos</Link>
            </li>
            <li>
              <Link to="/users">Usuarios</Link>
            </li>
          </ul>
        </nav>
      );
};

export default Navbar;
