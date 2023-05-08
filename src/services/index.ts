import moment from 'moment';
import { ICoin, ICoinResponse, IResponse } from '../interfaces';

export const coinsServices = async (): Promise<IResponse> => {
	try {
		const response = await fetch(import.meta.env.VITE_URL);
		const json = await response.json();
		const { version, fecha, autor, ...typesCoins } = json;
		const coins: ICoinResponse[] = Object.values(typesCoins);
		// TODO: esto hay que hacerlo del lado del backend
		return {
			version,
			date: moment(fecha).utc().format('YYYY-MM-DD'),
			author: autor,
			coins: coins.map(
				(coin: ICoinResponse): ICoin => ({
					code: coin?.codigo.toUpperCase(),
					name: coin?.nombre,
					unitMeasure: coin?.unidad_medida,
					date: moment(coin?.fecha).utc().format('YYYY-MM-DD'),
					value: coin?.valor,
				})
			),
		};
	} catch (e) {
		throw new Error('Error when obtaining coins');
	}
};
