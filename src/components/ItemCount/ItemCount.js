import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
	let [count, setCount] = useState(initial);

	const sumar = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const restar = () => {
		setCount(count - 1);
	};

	const agregar = () => {
		if (stock > 0) {
			onAdd(count);
		}
	};

	if (stock > 0) {
		return (
			<div className="itemCount">
				<div className="itemCountTop">
					<button onClick={restar}>-</button>
					<div>{count}</div>
					<button onClick={sumar}>+</button>
				</div>
				<div className="itemCountBottom">
					<button className="addButton" onClick={agregar}>
						Agregar
					</button>
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
