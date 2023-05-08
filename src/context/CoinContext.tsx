import { createContext, useContext } from 'react';
import { IUseCoins } from '../interfaces';

export const CoinContext = createContext<IUseCoins>({} as IUseCoins);

export const useCoinContext = (): IUseCoins => {
	return useContext<IUseCoins>(CoinContext);
};
