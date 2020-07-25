<template>
    <div id="app">
        <div>
            <p>Loading: {{ ifLoading }}</p>
            <p>點擊次數: {{ times }}</p>
            <button @click="reverseLoad(1)">Reverse</button>
        </div>

        <div>
            <p>random user api Loaded: {{ userLoaded }}</p>
            <button @click="reload(1)">Reload</button>
        </div>

        <div>
            <p>Female number: {{ femaleNum }}</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
    name: "app",
    components: {},
    mounted() {
        // this.$store.dispatch("getUser");
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
        ...mapGetters(["femaleNum"]),
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
            this.getUser();
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
