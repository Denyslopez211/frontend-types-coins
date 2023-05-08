import { useCoinContext } from '../context/CoinContext';
import { ICoin } from '../interfaces';

export const Coins = (): JSX.Element => {
	const { coins } = useCoinContext();
	return (
		<ul className='coins'>
			{coins &&
				coins.map((coin: ICoin) => (
					<li className='coin' key={coin.code}>
						<div>
							<h4>{coin.code}</h4>
						</div>
						<hr />
						<div>
							<h5>
								<span>name:</span>
								{coin.name}
							</h5>
							<h5>
								<span>Unit:</span>
								{coin.unitMeasure}
							</h5>
							<h5>
								<span>Date:</span>
								{coin.date}
							</h5>
							<h5>
								<span>Value:</span>
								{coin.value}
							</h5>
						</div>
					</li>
				))}
		</ul>
	);
};
