import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

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
				{/* <button className="buyButton">Comprar</button> */}
				<ItemCount stock={5} initial={1} onAdd={onAdd} />
			</div>
			<div>usted va a comprar {count} productos</div>
		</div>
	);
};

export default ItemDetail;
