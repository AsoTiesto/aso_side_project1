import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
    state: {
        isLoading: false,
        clickedTimes: 0
    },
    mutations: {
        loaded(state) {
            state.isLoading = !state.isLoading
        },
        addTimes(state, payload) {
            state.clickedTimes = state.clickedTimes + payload;
        }
    }

})
export default store;