import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="main">
				<Switch>
					<Route path="/" component={ItemListContainer} exact />
					<Route path="/item/:id" component={ItemDetailContainer} />
					<Route path="/category/:id" component={ItemListContainer} />
				</Switch>
			</main>
		</BrowserRouter>
	);
}

export default App;
