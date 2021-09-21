import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../CartContext/CartContext';

const CartWidget = () => {
	const { cart, addProduct, removeProduct } = useContext(context);

	let Q = 0;
	for (let i = 0; i < cart.length; i++) {
		Q = Q + cart[i].quantity;
	}

	return (
		<>
			<Link to="/cart" className="material-icons">
				shopping_cart
			</Link>
			<div>{Q}</div>
		</>
	);
};

export default CartWidget;
