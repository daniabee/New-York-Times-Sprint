import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/search">Search Articles</Link>
    </nav>
  );
};

export default Navigation;
