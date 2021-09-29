import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../CartContext/CartContext';

const ItemDetail = ({ product }) => {
	const { cart, addProduct, removeProduct } = useContext(context);
	const [count, setCount] = useState(0);

	const onAdd = (count) => {
		const formattedProd = {
			...product,
			count: count,
		};
		setCount(count);
		addProduct(formattedProd.id, formattedProd.title, formattedProd.count);
	};

	return (
		<div className="itemDetail">
			<div className="imgWrapper">
				<img className="imageDetail" src={product.pictureUrl} />
			</div>
			<div className="infoWrapper">
				<div className="title">{product.title}</div>
				<div className="description">{product.description}</div>
			</div>
			<div className="buyWrapper">
				<div className="price">${product.price}</div>

				{count < 1 ? (
					<ItemCount stock={5} initial={1} onAdd={onAdd} />
				) : (
					<Link to="/cart">
						<button>Finalizar Compra</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default ItemDetail;
