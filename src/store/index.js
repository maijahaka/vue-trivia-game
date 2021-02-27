import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questionItems: []
    },
    mutations: {
        setQuestionItems: (state, payload) => {
            state.questionItems = payload
        }
    },
    actions: {
        async fetchQuestionItems({ commit }, url) {
            const response = await axios.get(url)
            commit('setQuestionItems', response.data.results)
        }
    },
    getters: {}
})