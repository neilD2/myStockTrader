import * as types from './types';

export default {
    [types.MUTATE_ADD_QUANTITY]: (state, payload) => {
        state.stocks[payload.index].quantity += payload.by;
    },
    [types.MUTATE_MINUS_QUANTITY]: (state, payload) => {
        state.stocks[payload.index].quantity -= payload.by;
    },
    [types.MUTATE_MINUS_FUNDS]: (state, payload) => {
        state.funds -= payload;
    },
    [types.MUTATE_ADD_FUNDS]: (state, payload) => {
        state.funds += payload;
    },
    [types.MUTATE_RESET_PRICES]: (state, payload) => {
        for (let value of state.stocks) {
            value.price = Math.floor(Math.random() * 300) + 1;
        }
    },
    [types.MUTATE_UPDATE_FUNDS]: (state, payload) => {
        console.log(state)
        for (let value of state.stocks) {
            state.tempFunds -= value.price * value.quantity
        }
    },

};