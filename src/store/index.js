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
        async fetchQuestionItems({ commit }) {
            const response = await axios.get('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy')
            commit('setQuestionItems', response.data.results)
        }
    },
    getters: {
        numberOfQuestions: state => {
            return state.questionItems.length
        },
        getQuestionItemByIndex: state => index => {
            return state.questionItems[index]
        }
    }
})