import * as types from './types';

export default {
    [types.FUNDS]: state => {
        return state.funds;
    },
    [types.STOCKS]: state => {
        console.log('here',state)
        return state.stocks;
    },
    [types.PRICES]: state => {
        return state.stocks.price;
    }
};