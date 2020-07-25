<template>
    <div id="app">
        <p>Loading: {{ ifLoading }}</p>
        <p>點擊次數: {{ times }}</p>
        <button @click="reverseLoad(2)">Reverse</button>

        <div>
            <p>random user api Loaded: {{ userLoaded }}</p>
            <button @click="reload(2)">Reload</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "app",
    components: {},
    mounted() {
        this.$store.dispatch("getUser");
    },
    computed: {
        ifLoading() {
            return this.isLoading;
        },
        times() {
            return this.clickedTimes;
        },
        userLoaded() {
            return this.loaded;
        },
        ...mapState(["isLoading", "clickedTimes", "loaded"]),
    },
    methods: {
        reverseLoad(count) {
            this.$store.commit("loaded");
            this.$store.commit("addTimes", count);
        },
        reload(count) {
            this.$store.commit("setTrue");
            this.clickedActions(count);
            if (this.$store.state.loaded) {
                this.getUser();
            }
        },

        ...mapActions(["getUser", "clickedActions"]),
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
