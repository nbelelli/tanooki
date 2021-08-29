import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
	return (
		<>
			<Header />
			<ItemListContainer />
			{/* 			<ItemCount
				stock={5}
				onAdd={(count) => {
					console.log(count);
				}}
				initial={1}
			/> */}
			<ItemDetailContainer />
		</>
	);
}

export default App;
