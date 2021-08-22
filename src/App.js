import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
	return (
		<>
			<Header />
			<ItemListContainer />
			<ItemCount
				stock={5}
				onAdd={(count) => {
					console.log(count);
				}}
				initial={1}
			/>
		</>
	);
}

export default App;
