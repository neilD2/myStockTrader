<template>

    <nav class="navbar navbar-default">

        <div class="container">

            <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a style="font-size: 20px">Stock Trader</a></router-link>
        <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
        <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>

                <li class="nav pull-right"><a>Funds: {{funds}}</a></li>

                <app-save-data></app-save-data>

                <app-end-day></app-end-day>

            </ul>

    </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';
    import ResetPrices from './ResetPrices'
    import SaveData from './SaveData'

    export default {
        computed: {
            ...mapGetters({
                funds: types.FUNDS
            })
        },
        components: {
            appEndDay: ResetPrices,
            appSaveData: SaveData
        }
    }
</script>

<style>
    ul{
        margin-top: 4px;
    }
    .dd{
        margin-top: 4px;
    }
</style>