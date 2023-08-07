import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="listOne">
          <li >
            <Link to="/">Ladning Page</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
