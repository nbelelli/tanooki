import { useContext } from 'react';
import { context } from '../../CartContext/CartContext';

const CartWidget = () => {
	const { cart, addProduct, removeProduct } = useContext(context);

	return (
		<>
			<a href="#" className="material-icons">
				shopping_cart
			</a>
			<div>{cart.length}</div>
		</>
	);
};

export default CartWidget;
