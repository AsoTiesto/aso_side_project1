import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
        isLoading: false,
        clickedTimes: 0,
        loaded: false
    },
    actions: {
        getUser({ commit, dispatch }) {
            axios.get('https://randomuser.me/api/')
                .then(function (response) {
                    console.log(response);

                    if (response) {
                        commit('myMutations')
                        dispatch('anotherActions')
                    } else {
                        this.$store.state.loaded = false
                    }

                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        anotherActions() {
            console.log('Another Actions run!');
        },
        clickedActions({ commit }, payload) {
            commit('addTimes', payload)
        }

    },
    mutations: {
        loaded(state) {
            state.isLoading = !state.isLoading
        },
        addTimes(state, payload) {
            state.clickedTimes = state.clickedTimes + payload;
        },
        myMutations(state) {
            console.log('呼叫成功！ 將 loaded 設為 false');
            state.loaded = false;
        },
        setTrue(state) {
            state.loaded = true;
        }
    }

})
export default store;