const Item = ({ id, title, description, price, pictureUrl }) => {
	return (
		<>
			<div>{title}</div>
			<div>{description}</div>
			<div>${price}</div>
		</>
	);
};

export default Item;
