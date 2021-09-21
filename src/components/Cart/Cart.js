import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../CartContext/CartContext';

const Cart = () => {
	const { cart, removeProduct } = useContext(context);
	console.log(cart);

	if (cart.length === 0) {
		return (
			<>
				<div>no hay productos</div>
				<Link to="/">
					<button>Volver al Home</button>
				</Link>
			</>
		);
	}
	return (
		<div>
			{cart.map((prod) => (
				<div>
					<div>
						{prod.title} x {prod.quantity}
					</div>
					<button onClick={removeProduct(prod.id)}>eliminar</button>
				</div>
			))}
		</div>
	);
};

export default Cart;
