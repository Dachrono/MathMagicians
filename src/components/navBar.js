import './navBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="NavBar">
        <h1 className="navTitle">Math Magicians</h1>
        <ul className="navItems">
          <li><Link to="/">Home</Link></li>
          <li>|</li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li>|</li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
