import { useEffect, useState } from 'react';
import ItemList from './../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

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
					products.push(product_with_id);
				});
				setProducts(products);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<ItemList products={products} />
		</>
	);
};

export default ItemListContainer;
