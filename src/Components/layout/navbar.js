import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid title" style={{ paddingLeft: "10px" }}>
      <Link to="/" className="links">
        Finger Notes
      </Link>
    </div>
  );
};

export default Navbar;
