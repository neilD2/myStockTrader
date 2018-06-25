import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
        tempFunds: 10000,
        funds: 10000,
        stocks:[
            {brand:"BMW",price: Math.floor(Math.random() * 100) + 50,quantity:0},
            {brand:"Google",price:Math.floor(Math.random() * 400) + 300,quantity:0},
            {brand:"Apple",price:Math.floor(Math.random() * 300) + 200,quantity:0},
            {brand:"Twitter",price:Math.floor(Math.random() * 200) + 100,quantity:0}
            ]
    },
    getters,
    mutations,
    actions,

});