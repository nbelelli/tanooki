import './ItemDetail.css';

const ItemDetail = ({
	id,
	title,
	description,
	price,
	pictureUrl,
	platforms,
}) => {
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
				<button className="buyButton">Comprar</button>
			</div>
		</div>
	);
};

export default ItemDetail;
