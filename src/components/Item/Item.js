import './Item.css';

const Item = ({ id, title, description, price, platform, pictureUrl }) => {
	return (
		<>
			<div className="itemDetail">
				<div className="infoWrapper">
					<div className="imgWrapper">
						<img className="imageDetail" src={pictureUrl} />
					</div>
					<div className="title">{title}</div>

					<div className="price">${price}</div>
				</div>
			</div>
		</>
	);
};

export default Item;
