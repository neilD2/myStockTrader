<template>
    <div>
        <a>
            <b-dropdown tag="li" split text="Save & Load"
                        class="dd pull-right">
                <b-dropdown-item-button @click="saveData()"><a>Save</a></b-dropdown-item-button>
                <b-dropdown-item-button><a>Load</a></b-dropdown-item-button>
            </b-dropdown>
        </a>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';
    import axios from 'axios'

    export default {
        computed: {
            ...mapGetters({
                stocks: types.STOCKS,
            })
        },
            methods: {
                saveData(){
                    axios.post('/stocks.json', this.stocks)
                        .then(res => console.log(res))
                        .catch(error => console.log(error))
                }
            }

    }
</script>