<template>
    <div class="home container">
        <h1>Trade or view your portfolio</h1>
        <hr>
        <p>You may save and load your data <br/>
        Click on 'End day' to save a new day!</p>
        <hr>
        <h3>Your Funds: ${{funds}} </h3>
        <h3>Your stocks: {{stocks}} </h3>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';
    export default {
        computed: {
            ...mapGetters({
                funds: types.FUNDS
            })
        }
    }
</script>

<style>

    .home {
        border: solid 1px lightgrey;
    }

</style>
