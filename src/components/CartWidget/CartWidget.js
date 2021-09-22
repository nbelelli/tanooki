import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../CartContext/CartContext';
import './CartWidget.css';

const CartWidget = () => {
	const { cart } = useContext(context);

	let Q = 0;
	for (let i = 0; i < cart.length; i++) {
		Q = Q + cart[i].quantity;
	}

	if (cart.length === 0) {
		return <></>;
	}
	return (
		<div className="cartWidget">
			<Link to="/cart" className="material-icons">
				shopping_cart
			</Link>
			<div>{Q}</div>
		</div>
	);
};

export default CartWidget;
