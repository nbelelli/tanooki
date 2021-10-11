import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../CartContext/CartContext';
import './Cart.css';
import { firestore } from '../../firebase';

const Cart = () => {
	const { cart, removeProduct } = useContext(context);
	const [name, setName] = useState('');
	const [lName, setLname] = useState('');
	const [email, setEmail] = useState('');

	const submitOrder = () => {
		const user = {
			name: name,
			lName: lName,
			email: email,
		};
		const order = {
			user: user,
			cart: cart,
		};
		const db = firestore;
		const collection = firestore.collection('orders');
		collection.add(order);
	};

	const saveName = (e) => {
		setName(e.target.value);
	};
	const saveLastName = (e) => {
		setLname(e.target.value);
	};
	const saveEmail = (e) => {
		setEmail(e.target.value);
	};

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
		<div className="cartPage">
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
				<button onClick={submitOrder}>Finalizar Compra</button>
			</div>
			<div className="buyerForm">
				<div>Nombre</div>
				<input type="text" onChange={saveName} />
				<div>Apellido</div>
				<input type="text" onChange={saveLastName} />
				<div>email</div>
				<input type="email" onChange={saveEmail} />
			</div>
		</div>
	);
};

export default Cart;
