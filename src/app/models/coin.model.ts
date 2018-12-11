import { Change } from './change.model';

export interface Coin {
    symbol: string;
    cap: string;
    change: Change;
    price: string;
    coinheat: number;
    url: string;
}
