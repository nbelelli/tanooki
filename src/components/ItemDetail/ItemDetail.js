import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({
	id,
	title,
	description,
	price,
	pictureUrl,
	platforms,
}) => {
	const [count, setCount] = useState(0);

	const onAdd = (count) => {
		console.log('ejecuto ON ADD con ', count);
		setCount(count);
	};

	return (
		<div className="itemDetail">
			<div className="imgWrapper">
				<img className="imageDetail" src={pictureUrl} />
			</div>
			<div className="infoWrapper">
				<div className="title">{title}</div>
				<div className="description">{description}</div>
			</div>
			<div className="buyWrapper">
				<div className="price">${price}</div>

				{count < 1 ? (
					<ItemCount stock={5} initial={1} onAdd={onAdd} />
				) : (
					<Link to="/cart">
						<button>Finalizar Compra</button>
					</Link>
				)}
			</div>
			{/* <div>usted va a comprar {count} productos</div> */}
		</div>
	);
};

export default ItemDetail;
