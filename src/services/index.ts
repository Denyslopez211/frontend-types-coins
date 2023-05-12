import moment from 'moment';
import { ICoin, IResponse } from '../interfaces';

export const coinsServices = async (): Promise<IResponse> => {
	try {
		const response = await fetch(import.meta.env.VITE_URL);
		const json = await response.json();
		const { version, date, author, coins }: IResponse = json;
		return {
			version,
			date: moment(date).utc().format('YYYY-MM-DD'),
			author,
			coins: coins.map(
				({ name, code, unitMeasure, date, value }: ICoin): ICoin => ({
					code: code.toUpperCase(),
					name,
					unitMeasure,
					date: moment(date).utc().format('YYYY-MM-DD'),
					value,
				})
			),
		};
	} catch (e) {
		throw new Error('Error when obtaining coins');
	}
};
