<template>
  <div>
    <question :question="questionItem.question" />
    <answer 
      v-for="(answer, index) of answerOptions" 
      :key="index" 
      :answer="answer" 
      @selected-answer="handleAnswerSelected"
    />
    <div>Question {{id}}/{{numberOfQuestions}}</div>
  </div>
</template>

<script>
import _ from 'lodash'
import Question from './Question'
import Answer from './Answer.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'QuestionItem',
  components: {
    Question,
    Answer
  },
  computed: {
    ...mapGetters(['numberOfQuestions']),
    id() {
      const { id } = this.$route.params
      return id      
    },
    questionItem() {
        return this.$store.getters.getQuestionItemByIndex(this.id - 1)
    },
    answerOptions() {
      if (this.questionItem.type === 'boolean') {
        return ["True", "False"]
      }

      let options = this.questionItem.incorrect_answers
      options.push(this.questionItem.correct_answer)
      return _.shuffle(options)
    }
  },
  methods: {
    handleAnswerSelected(answer) {
      this.questionItem.selectedAnswer = answer
      console.log(this.questionItem.correct_answer === this.questionItem.selectedAnswer)
      if (this.id < this.numberOfQuestions) {
        this.$router.push(`/questions/${Number(this.id) + 1}`)
      } else {
        this.$router.push('/results')
      }
    }
  }
}
</script>

<style>

</style>