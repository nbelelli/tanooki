import ItemDetail from '../ItemDetail/ItemDetail';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import './../ItemList/ItemList.css';

import psycho2 from './../../images/psycho2.jpg';
import botw from './../../images/botw.jpg';
import farcry5 from './../../images/farcry5.jpg';
import gears5 from './../../images/gears5.jpg';
import mario from './../../images/mario.jpg';
import residentevil2 from './../../images/residentevil2.jpg';
import hades from './../../images/hades.jpg';

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
