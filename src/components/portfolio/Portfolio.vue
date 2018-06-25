<template>
    <div>
        <h1>The Portfolio Page </h1>
        <hr>
        <template  v-for="(stock,i) in stocks" v-if="stock.quantity>0">
            <div class="col-lg-6">
                <div class="row myStock">
                    <div class="stockHeader">{{stock.brand}} price ({{stock.price}}) quantity ({{stock.quantity}})</div>
                    <div class="input-group">
                        <input type="number" class="form-control" placeholder="Quantity" ref="my_input">
                        <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click.prevent="getFormValues(i), minusQuantity({by: quant, index: i}), addFunds(quant * stock.price)">Sell</button>
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
                minusQuantity: types.MINUS_QUANTITY,
                addFunds: types.ADD_FUNDS
            }),
            getFormValues (i) {
                console.log(this.$refs.my_input[i].value,"here")
                this.quant = Number(this.$refs.my_input[i].value)
            }
        }
    }
</script>

<style>
    .myStock{
        border: solid 1px aliceblue;
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