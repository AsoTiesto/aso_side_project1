<template>
    <div>
        <p>Loading: {{ ifLoading }}</p>
        <p>點擊次數: {{ times }}</p>
        <button @click="reverseLoad(2)">Reverse</button>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "app",
    components: {},
    computed: {
        ...mapState({
            ifLoading(state) {
                return state.isLoading;
            },
            times(state) {
                return state.clickedTimes;
            },
        }),
    },
    methods: {
        reverseLoad(count) {
            this.$store.commit("loaded");
            this.$store.commit("addTimes", count);
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
