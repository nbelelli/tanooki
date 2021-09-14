import { useState } from 'react';
import './ItemCount.css';
import { Link } from 'react-router-dom';

const AddBtn = () => {
	return <button>Agregar al carrito</button>;
};

const BuyBtn = () => {
	return (
		<Link to="/cart">
			<button>Finalizar Compra 2</button>
		</Link>
	);
};

const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);
	const [btnType, setBtnType] = useState('add');

	const sumar = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const restar = () => {
		setCount(count - 1);
	};

	const handleClick = () => {
		setBtnType('buy');
		onAdd(count);
	};

	if (stock > 0) {
		return (
			<div className="itemCount">
				<div className="itemCountTop">
					<button onClick={restar}>-</button>
					<div>{count}</div>
					<button onClick={sumar}>+</button>
				</div>

				<div className="itemCountBottom" onClick={handleClick}>
					<AddBtn />
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div>Cantidad: {count}</div>
				<button onClick={restar}>-</button>
				<button onClick={sumar}>+</button>
				<button disabled>Agregar</button>
			</div>
		);
	}
};

export default ItemCount;
