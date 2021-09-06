import NavBar from '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="header">
			<Link to="/">
				<div class="title">Tanooki Games</div>
			</Link>
			<NavBar />
			<CartWidget />
		</header>
	);
}

export default Header;
