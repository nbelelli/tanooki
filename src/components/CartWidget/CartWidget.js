import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../CartContext/CartContext';

const CartWidget = () => {
	const { cart, addProduct, removeProduct } = useContext(context);

	return (
		<>
			<Link to="/cart" className="material-icons">
				shopping_cart
			</Link>
			<div>{cart.length}</div>
		</>
	);
};

export default CartWidget;
