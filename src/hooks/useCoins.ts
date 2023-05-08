import { useEffect, useState } from 'react';
import { ICoin, IInformation, IUseCoins } from '../interfaces';
import { coinsServices } from '../services';
// import response from '../mock/response.json';

export const useCoins = (): IUseCoins => {
	const [coins, setCoins] = useState<ICoin[]>([]);
	const [information, setInformation] = useState<IInformation>(
		{} as IInformation
	);
	const [loading, setLoading] = useState(false);

	const getListCoins = async () => {
		setLoading(true);
		const { coins, ...information } = await coinsServices();
		setCoins(coins);
		setInformation(information);
		setLoading(false);
	};

	useEffect(() => {
		getListCoins();
	}, []);

	return {
		information,
		coins,
		loading,
	};
};
