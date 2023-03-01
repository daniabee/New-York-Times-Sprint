import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";

const Navigation = () => {
  return (
    <div className="box">
      <nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/search">
          Search Articles
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
