<template>
    <div>
        <h1>The stocks Page </h1>
        <p></p>
        <hr>
        <template  v-for="(stock,i) in stocks">
                <div class="col-lg-6">
                <div class="row stock">
                    <div class="stockHeader">{{stock.brand}} price ({{stock.price}})</div>
                <div class="input-group">
                    <input type="number" class="form-control" placeholder="Quantity" ref="my_input">
                    <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click.prevent="getFormValues(i), addQuantity({by: quant, index: i}), minusFunds(quant * stock.price)">Buy</button>


      </span>
            </div>
                </div>
                </div>
        </template>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import * as types from '../../store/types';
    export default {
        data() {
            return {
                quant:0
            }
        },
        computed: {
            ...mapGetters({
                stocks: types.STOCKS,
            })
        },
        methods: {
            ...mapActions({
                addQuantity: types.ADD_QUANTITY,
                minusFunds: types.MINUS_FUNDS
            }),
            getFormValues (i) {
                this.quant = Number(this.$refs.my_input[i].value)
            }
        }
    }
</script>

<style>
    .stock{
        border: solid 1px palegreen;
        padding: 12px;
        margin: 12px;
        float: left;
    }
    .stockHeader{
        background-color:#ECF3F3;
        margin-bottom: 23px;
    }
    .buy{
        margin-left: 120px;
    }
</style>