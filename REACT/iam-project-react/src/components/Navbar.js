import '../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
    <div className="navbar-container">
        <ul className="app-navbar">
          <li className="navbar-link"><Link to="/">Home</Link></li>
          <li className="navbar-link"><Link to="/views">Views</Link></li>
          <li className="navbar-link"><Link to="/coverletter">Cover Letter</Link></li>
          <li className="navbar-link"><Link to="/certifications">Certifications</Link></li>
          <li className="navbar-link"><Link to="/repositories">Repositories</Link></li>
          <li className="navbar-link"><Link to="/applications">Applications</Link></li>
          <li className="navbar-link"><Link to="/testing">Testing</Link></li>
        </ul>
      </div>
    );
}
 
export default Navbar;