import ItemDetail from '../ItemDetail/ItemDetail';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
	return (
		<>
			<div>
				{products.map((prod) => (
					<Item
						key={prod.id}
						title={prod.title}
						price={prod.price}
						description={prod.description}
						platform={prod.platform}
					/>
				))}
			</div>
		</>
	);
};

export default ItemList;
