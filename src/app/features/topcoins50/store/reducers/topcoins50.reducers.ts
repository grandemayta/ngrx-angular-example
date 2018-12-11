import * as fromTopCoins50 from '../actions/topcoins50.action';
import { Coin } from 'models/coin.model';

export interface TopCoin50State {
    data: Coin[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: TopCoin50State = {
    data: [],
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromTopCoins50.TopCoins50Action
    ): TopCoin50State {

    switch (action.type) {
        case fromTopCoins50.LOAD_TOPCOINS50: {
            return {
                ...state,
                loading: true
            };
        }
        case fromTopCoins50.LOAD_TOPCOINS50_SUCCESS: {
            let data = action.payload;
            data = Object.keys(data).map(item => data[item]);
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            };
        }
        case fromTopCoins50.LOAD_TOPCOINS50_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getTopCoins50 = (state: TopCoin50State) => state.data;
export const getTopCoins50Loading = (state: TopCoin50State) => state.loading;
export const getTopCoins50Loaded = (state: TopCoin50State) => state.loaded;
