<template>
    <div id="app">
        <p>Loading: {{ ifLoading }}</p>
        <p>點擊次數: {{ times }}</p>
        <button @click="reverseLoad(2)">Reverse</button>

        <div>
            <p>random user api Loaded: {{ userLoaded }}</p>
            <button @click="reload">Reload</button>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "app",
    components: {},
    mounted() {
        this.$store.dispatch("getUser");
    },
    computed: {
        ...mapState({
            ifLoading(state) {
                return state.isLoading;
            },
            times(state) {
                return state.clickedTimes;
            },
            userLoaded(state) {
                return state.loaded;
            },
        }),
    },
    methods: {
        reverseLoad(count) {
            this.$store.commit("loaded");
            this.$store.commit("addTimes", count);
        },
        reload() {
            this.$store.commit("setTrue");
            if (this.$store.state.loaded) {
                this.$store.dispatch("getUser");
            }
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
