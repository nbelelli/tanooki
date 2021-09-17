import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../CartContext/CartContext';

const ItemDetail = ({
	id,
	title,
	description,
	price,
	pictureUrl,
	platforms,
}) => {
	const { cart, addProduct, removeProduct } = useContext(context);
	console.log('los productos', cart);
	const [count, setCount] = useState(0);

	const onAdd = (count) => {
		const formattedProd = {
			id: id,
			title: title,
			description: description,
			price: price,
			pictureUrl: pictureUrl,
			platforms: platforms,
			count: count,
		};
		setCount(count);
		addProduct(formattedProd.id, formattedProd.title, formattedProd.count);
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
