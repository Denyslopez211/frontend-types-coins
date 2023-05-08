import { useCoinContext } from '../context/CoinContext';

export const Information = (): JSX.Element => {
	const { information } = useCoinContext();
	const { version, author, date } = information;
	return (
		<div className='information'>
			<h3>
				<span>Version:</span>
				{version}
			</h3>
			<h3>
				<span>Author:</span>
				{author}
			</h3>
			<h3>
				<span>Date:</span>
				{date}
			</h3>
		</div>
	);
};
