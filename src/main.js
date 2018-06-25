import Vue from 'vue'
import VueRouter from 'vue-router';
import { Dropdown } from 'bootstrap-vue/es/components';
import App from './App.vue'
import { routes } from './routes';
import { store } from './store/store';
import axios from 'axios'


Vue.use(Dropdown);

Vue.use(VueRouter);

axios.defaults.baseURL = "https://stocktrader-fb0b5.firebaseio.com"

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    console.log('global beforeEach');
    next();
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

