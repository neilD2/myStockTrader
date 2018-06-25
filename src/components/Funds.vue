<template>
    <div>
        <p>Funds is: £ {{ funds }}</p>
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