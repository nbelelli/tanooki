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
			<div className="infoWrapper">
				<div className="title">{title}</div>
				<div className="description">{description}</div>
				<div>${price}</div>
			</div>
			<div className="imgWrapper">
				<img className="imageDetail" src={pictureUrl} />
			</div>
		</div>
	);
};

export default ItemDetail;
