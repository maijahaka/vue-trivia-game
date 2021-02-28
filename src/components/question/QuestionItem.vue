<template>
  <div>
    <question :question="questionItem.question" />
    <answer
      v-for="(answer, index) of answerOptions"
      :key="index"
      :answer="answer"
      @selected-answer="handleAnswerSelected"
    />
    <v-card-text class="pb-0">
      Question {{ id }}/{{ numberOfQuestions }}
    </v-card-text>
  </div>
</template>

<script>
import _ from 'lodash'
import Question from './Question'
import Answer from './Answer.vue'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'QuestionItem',
    components: {
        Question,
        Answer
    },
    computed: {
        ...mapState(['questionItems']),
        numberOfQuestions() {
            return this.questionItems.length
        },
        id() {
            const { id } = this.$route.params
            return id
        },
        questionItem() {
            // question with id 1 is located in index 0 of the questionItems array, etc.
            return this.questionItems[this.id - 1]
        },
        answerOptions() {
            if (this.questionItem.type === 'boolean') {
                return ['True', 'False']
            }

            let options = this.questionItem.incorrect_answers
            options.push(this.questionItem.correct_answer)
            // show answer options in random order
            return _.shuffle(options)
        }
    },
    methods: {
        handleAnswerSelected(answer) {
            // store information of the selected answer in Vuex store
            this.questionItem.selected_answer = answer
            this.setQuestionItems(this.questionItems)
            if (this.id < this.numberOfQuestions) {
                // move on to the next question after answering the current question
                this.$router.push(`/questions/${Number(this.id) + 1}`)
            } else {
                // show results after answering the final question
                this.$router.push('/results')
            }
        },
        ...mapMutations(['setQuestionItems'])
    }
}
</script>

<style>
.v-card__title {
  word-break: normal !important;
}
</style>