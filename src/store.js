import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const modalData = {
    namespaced: true,
    state: {
        isLoading: false,
        clickedTimes: 0,
        loaded: false,
        users: []
    },
    getters: {
        femaleNum(state) {
            return state.users.filter(item => item.gender == 'female').length;
        }
    },
    actions: {
        getUser({ commit, dispatch }) {
            axios.get('https://randomuser.me/api/?results=5')
                .then(function (response) {
                    let data = response.data.results

                    console.log(response);

                    if (response.status == 200) {
                        commit('myMutations')
                        commit("setUserInfo", data)
                        dispatch('anotherActions')
                    } else {
                        console.log("錯誤！ 呼叫 api 失敗");
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
            state.loaded = false;
        },
        setTrue(state) {
            state.loaded = true;
        },
        setUserInfo(state, payload) {
            state.users = payload
        }
    }
}

const store = new Vuex.Store({
    modules: {
        moduleData: modalData
    }

})
export default store;