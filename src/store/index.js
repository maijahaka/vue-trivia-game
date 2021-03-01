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
            try {
                const response = await axios.get(url)
                if (response.data.response_code !== 0) {
                    throw new Error(`API responded with response code ${response.data.response_code}`)
                }
                commit('setQuestionItems', response.data.results)
            } catch (error) {
                throw new Error(`Data was not retrieved successfully: ${error.message}.`)
            }
        }
    },
    getters: {}
})