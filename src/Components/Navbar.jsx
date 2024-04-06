import "./Navbar.css";
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="Navbar-list">
        <div className="Navbar-list1">
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/ConvertKaro">ConvertKaro</NavLink>
            </li>
            <li>
              <NavLink to="/Career">Career</NavLink>
            </li>
            <li>
              <NavLink to="/Support">Support</NavLink>
            </li>
          </ul>
        </div>
        <div className="Navbar-list2">
          <div className="login">Login</div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
