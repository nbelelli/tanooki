import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CustomProvider from './CartContext/CartContext';

function App() {
	return (
		<BrowserRouter>
			<CustomProvider>
				<Header />
				<main className="main">
					<Switch>
						<Route path="/" component={ItemListContainer} exact />
						<Route path="/item/:id" component={ItemDetailContainer} />
						<Route path="/category/:id" component={ItemListContainer} />
						<Route path="/cart" component={Cart} />
					</Switch>
				</main>
				<Footer />
			</CustomProvider>
		</BrowserRouter>
	);
}

export default App;
