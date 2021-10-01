import ItemDetail from '../ItemDetail/ItemDetail';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import './../ItemList/ItemList.css';

const ItemList = ({ products }) => {
	return (
		<>
			<div className="itemList">
				{products.map((prod) => (
					<Link to={`/item/${prod.id}`}>
						<Item
							key={prod.id}
							title={prod.title}
							price={prod.price}
							description={prod.description}
							platform={prod.platform}
							pictureUrl={prod.pictureUrl}
						/>
					</Link>
				))}
			</div>
		</>
	);
};

export default ItemList;
