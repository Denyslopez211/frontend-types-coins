import { useCoinContext } from './context/CoinContext';
import { Information } from './components/Information';
import { Coins } from './components/Coins';
import './App.css';

export const App = (): JSX.Element => {
	const { loading } = useCoinContext();

	return (
		<div>
			<header>
				<h1>Types of Coins</h1>
				<hr />
				<Information />
			</header>
			<hr />
			<main>{loading ? <p>Loading... </p> : <Coins />}</main>
		</div>
	);
};
