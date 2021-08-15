import NavBar from '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';
import './Header.css';

function Header() {
	return (
		<header className="header">
			<div class="title">Tanooki Games</div>
			<NavBar />
			<CartWidget />
		</header>
	);
}

export default Header;
