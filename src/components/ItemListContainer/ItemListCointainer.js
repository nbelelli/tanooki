import { useEffect, useState } from 'react';
import ItemList from './../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import psycho2 from './../../images/psycho2.jpg';
import botw from './../../images/botw.jpg';
import farcry5 from './../../images/farcry5.jpg';
import gears5 from './../../images/gears5.jpg';
import mario from './../../images/mario.jpg';
import residentevil2 from './../../images/residentevil2.jpg';
import hades from './../../images/hades.jpg';

const loadProducts = new Promise((res, rej) => {
	setTimeout(() => {
		const result = [
			{
				id: '1',
				title: 'Gears of War 5',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: '7000',
				platform: 'Xbox Series X/X',
				category_id: 1,
				pictureUrl: gears5,
			},
			{
				id: '2',
				title: 'Hades',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: '8000',
				platform: 'Xbox One',
				category_id: 1,
				pictureUrl: hades,
			},
			{
				id: '3',
				title: 'Far Cry 5',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: '8000',
				platform: 'Playstation 5',
				category_id: 2,
				pictureUrl: farcry5,
			},
			{
				id: '4',
				title: 'Resident Evil 2',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: '8000',
				platform: 'Playstation 4',
				category_id: 2,
				pictureUrl: residentevil2,
			},
			{
				id: '5',
				title: 'Super Mario Odysee',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: '8000',
				platform: 'Nintendo Switch',
				category_id: 3,
				pictureUrl: mario,
			},
			{
				id: '6',
				title: 'The Legend of Zelda: Breath of the Wild',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: '8000',
				platform: 'Nintendo Switch',
				category_id: 3,
				pictureUrl: botw,
			},
			{
				id: '7',
				title: 'Psychonauts 2',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				price: '5000',
				platform: 'Xbox Series X/S',
				category_id: 3,
				pictureUrl: psycho2,
			},
		];
		res(result);
	}, 2000);
});

const ItemListContainer = () => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		loadProducts.then((products) => {
			setProducts(products);
		});
	}, [id]);

	if (id) {
		const filteredProducts = products.filter((product) => {
			return product.category_id == id;
		});
		return (
			<>
				<ItemList products={filteredProducts} />
			</>
		);
	} else {
		return (
			<>
				<ItemList products={products} />
			</>
		);
	}
};

export default ItemListContainer;
