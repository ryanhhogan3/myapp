import { Outlet, Link } from "react-router-dom";
import './Navbar.css';



const Navbar = () => {
  return (
    <>
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rates">Rates</Link>
          </li>
        </ul>
      </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;
