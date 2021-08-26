import Item from './../Item/Item';
import { useState } from 'react';
import { useEffect } from 'react';

const loadProducts = new Promise((res, rej) => {
	setTimeout(() => {
		console.log('cargando');
		const result = [
			{
				id: '1',
				title: 'fifa',
				price: '7000',
			},
			{
				id: '2',
				title: 'NBA',
				price: '7000',
			},
		];
		res(result);
	}, 2000);
});

const ItemList = () => {
	const [theProducts, setProducts] = useState([]);
	useEffect(() => {
		loadProducts.then((products) => {
			setProducts(products);
		}, []);
	});

	return theProducts.map((product) => {
		<Item key={product.id} title={product.title} />;
	});
};

export default ItemList;
