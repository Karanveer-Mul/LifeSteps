import { Link } from "react-router-dom";
import "../../CSS/orgs.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <ul className="navbar">
        <li>
          <Link
            to="/"
            className="title"
            style={{ color: "white", marginRight: "20px" }}
          >
            CR
          </Link>
        </li>
        <li>
          <Link to="/" className="navLink">
            Legislators
          </Link>
        </li>
        <li>
          <Link to="/orgsearch" className="navLink">
            Organisations
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
