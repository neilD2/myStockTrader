<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <br/>
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import * as types from './store/types';

    export default {
        computed: {
            value: {
                get() {
                    return this.$store.getters[types.VALUE];
                },
                set(value) {
                    this.$store.dispatch(types.UPDATE_VALUE, value);
                }
            }
        },
        methods: {
            updateValue(event) {
                this.$store.dispatch(types.UPDATE_VALUE, event.target.value);
            },
        },
        components: {
            appHeader: Header
        }
    }
</script>

<style>

</style>
