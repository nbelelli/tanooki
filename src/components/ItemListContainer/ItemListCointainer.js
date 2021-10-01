import { useEffect, useState } from 'react';
import ItemList from './../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';

const ItemListContainer = () => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const db = firestore;
		const collection = firestore.collection('products');
		const query = id
			? collection.where('category_id', '==', parseInt(id)).get()
			: collection.get();

		query
			.then((snapshot) => {
				const docs = snapshot.docs;
				const products = [];
				docs.forEach((doc) => {
					const docSnapshot = doc;
					const product_with_id = { ...docSnapshot.data(), id: docSnapshot.id };
					console.log('product being', docSnapshot.data());
					products.push(product_with_id);
				});
				setProducts(products);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	return (
		<>
			<ItemList products={products} />
		</>
	);
};

export default ItemListContainer;
