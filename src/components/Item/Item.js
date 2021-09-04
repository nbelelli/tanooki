const Item = ({ id, title, description, price, platform }) => {
	return (
		<>
			<div>{title}</div>
			<div>{platform}</div>
			<div>{description}</div>
			<div>${price}</div>
		</>
	);
};

export default Item;
