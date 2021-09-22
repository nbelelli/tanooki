import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../CartContext/CartContext';
import './Cart.css';

const Cart = () => {
	const { cart, removeProduct } = useContext(context);
	console.log('el carrito', cart);

	if (cart.length === 0) {
		return (
			<>
				<div>No hay productos</div>
				<Link to="/">
					<button>Volver al Home</button>
				</Link>
			</>
		);
	}
	return (
		<div className="cart">
			{cart.map((prod) => (
				<div className="cartList">
					<div className="cartItem">
						<div className="cartItemTitle">{prod.title}</div>
						<div className="cartItemQuantity">Cantidad: {prod.quantity}</div>
					</div>
					<button
						className="cartItemDelete"
						onClick={() => removeProduct(prod.id)}
					>
						Eliminar
					</button>
				</div>
			))}
		</div>
	);
};

export default Cart;
