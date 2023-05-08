import { useCoins } from '../hooks/useCoins';
import { IUseCoins, ProviderProps } from '../interfaces';
import { CoinContext } from './CoinContext';

export const CoinProvider = ({ children }: ProviderProps): JSX.Element => {
	const useCoinData: IUseCoins = useCoins();
	return (
		<CoinContext.Provider value={{ ...useCoinData }}>
			{children}
		</CoinContext.Provider>
	);
};
