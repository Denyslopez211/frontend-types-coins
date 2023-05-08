export interface ICoin {
	code: string;
	name: string;
	unitMeasure: string;
	date: string;
	value: number;
}

export interface IInformation {
	version: string;
	author: string;
	date: string;
}

export interface ICoinResponse {
	codigo: string;
	nombre: string;
	unidad_medida: string;
	fecha: string;
	valor: number;
}

export interface IResponse {
	version: string;
	author: string;
	date: string;
	coins: ICoin[];
}

export interface IUseCoins {
	coins: ICoin[];
	information: IInformation;
	loading: boolean;
}

export interface ProviderProps {
	children: JSX.Element | JSX.Element[];
}
