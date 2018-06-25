import Home from './components/Home.vue';
import Header from './components/Header.vue';

const Portfolio = resolve => {
    require.ensure(['./components/portfolio/Portfolio.vue'], () => {
        resolve(require('./components/portfolio/Portfolio.vue'));
    }, 'portfolio');
};

const Stocks = resolve => {
    require.ensure(['./components/stocks/Stocks.vue'], () => {
        resolve(require('./components/stocks/Stocks.vue'));
    }, 'stocks');
};


export const routes = [
    {
        path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    }
    },
    {
        path: '/portfolio', components: {
        default: Portfolio,
        'header-top': Header
    },
    },
    {
        path: '/stocks', components: {
        default: Stocks,
        'header-top': Header
    },
    },
    {path: '/redirect-me', redirect: {name: 'home'}},
    {path: '*', redirect: '/'}
];