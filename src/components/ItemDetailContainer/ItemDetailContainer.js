import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect } from 'react';
import { useState } from 'react';

const getItem = new Promise((res, rej) => {
	setTimeout(() => {
		const item = {
			id: '1',
			title: 'Psychonauts 2',
			price: '7000',
			description:
				'Juego de aventura en plataforma con un estilo cinematográficos que incluye un montón de poderes psíquicos personalizables.',
			pictureURL:
				'https://store-images.s-microsoft.com/image/apps.59150.13578175979543723.424401c3-5602-4e35-abfc-c00f9156296a.99cd91cb-4b52-4353-b333-28a9e48f06fe',
		};
		res(item);
	}, 2000);
});

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	useEffect(() => {
		getItem.then((item) => {
			setItem(item);
		}, []);
	});

	return (
		<ItemDetail
			id={item.id}
			title={item.title}
			price={item.price}
			description={item.description}
			pictureUrl={item.pictureURL}
		/>
	);
};

export default ItemDetailContainer;
