import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='App'>
      <header className='header'>
        <div style={{ marginLeft: "15px" }}>
          <h1>
            <Link to='/home' className='logo'>
              Fashion
            </Link>
          </h1>
        </div>

        <div className='header-links'>
          <ul>
            <li>
              <Link to='/home'>home</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>

            <li></li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
