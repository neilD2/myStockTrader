import * as types from './types';

export default {
    [types.ADD_QUANTITY]: ({ commit }, payload) => {
        commit(types.MUTATE_ADD_QUANTITY, payload);
    },
    [types.MINUS_QUANTITY]: ({ commit }, payload) => {
        commit(types.MUTATE_MINUS_QUANTITY, payload);
    },
    [types.MINUS_FUNDS]: ({ commit }, payload) => {
        commit(types.MUTATE_MINUS_FUNDS, payload);
    },
    [types.ADD_FUNDS]: ({ commit }, payload) => {
        commit(types.MUTATE_ADD_FUNDS, payload);
    },
    [types.RESET_PRICES]: ({ commit }, payload) => {
        commit(types.MUTATE_RESET_PRICES, payload);
    },
    [types.UPDATE_FUNDS]: ({ commit }, payload) => {
        commit(types.MUTATE_UPDATE_FUNDS, payload);
    }
};