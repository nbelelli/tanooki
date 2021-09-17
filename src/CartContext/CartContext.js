import { Children } from 'react';
import { createContext, useState } from 'react';

export const context = createContext([]);

const { Provider } = context;

const CustomProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addProduct = (id, title, quantity) => {
		if (isInCart(id)) {
			const existingProd = cart.find((prod) => prod.id === id);
			const existingProdQuantity = existingProd.quantity;
			const newCart = cart.filter((prod) => {
				return prod.id != id;
			});

			newCart.push({
				id: id,
				title: title,
				quantity: existingProdQuantity + quantity,
			});

			setCart(newCart);
		} else {
			let newCart = [...cart, { id: id, title: title, quantity: quantity }];
			setCart(newCart);
		}
	};

	const removeProduct = (id) => {
		let newCart = cart.filter((product) => product.id != id);
		setCart(newCart);
	};

	const clear = () => [setCart([])];

	const isInCart = (id) => {
		return cart.find((product) => product.id === id);
	};

	return (
		<Provider value={{ cart, addProduct, removeProduct }}>{children}</Provider>
	);
};

export default CustomProvider;
