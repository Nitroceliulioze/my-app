import { Link } from "react-router-dom";
import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <Link className="link" to="/">
          <span>HOMEPAGE</span>
        </Link>
        <Link className="link" to="/about-us">
          <span>ABOUT US</span>
        </Link>
        <Link className="link" to="/register">
          <span>REGISTER</span>
        </Link>
        <Link className="link" to="/login">
          <span>LOGIN</span>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
