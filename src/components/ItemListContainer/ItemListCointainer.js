import { useEffect, useState } from 'react';
import ItemList from './../ItemList/ItemList';

const loadProducts = new Promise((res, rej) => {
	setTimeout(() => {
		console.log('cargando');
		const result = [
			{
				id: '1',
				title: 'Cyberpunk 2077',
				price: '7000',
				platform: 'Xbox One',
			},
			{
				id: '2',
				title: 'Hades',
				price: '8000',
				platform: 'Playstation 5',
			},
		];
		res(result);
	}, 2000);
});

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		loadProducts.then((products) => {
			setProducts(products);
		});
	});

	return (
		<>
			<ItemList products={products} />
		</>
	);
};

export default ItemListContainer;
