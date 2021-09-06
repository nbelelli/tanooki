import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navBar">
			<Link to="/category/1">Xbox</Link>
			<Link to="/category/2">Playstation</Link>
			<Link to="/category/3">Nintendo Switch</Link>
		</nav>
	);
}

export default NavBar;
