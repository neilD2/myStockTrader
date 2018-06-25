<template>
    <div>
        <button tag="li" active-class="active" class="pull-right" @click="resetPrices(), updateFunds()"><a>End Day</a></button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapActions({
                resetPrices: types.RESET_PRICES,
                updateFunds: types.UPDATE_FUNDS,
            })
        }
    }
</script>