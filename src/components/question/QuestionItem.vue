<template>
  <div>
    <question :question="questionItem.question" />
    <answer v-for="(answer, index) of answerOptions" :key="index" :answer="answer" />
  </div>
</template>

<script>
import _ from 'lodash'
import Question from './Question'
import Answer from './Answer.vue'

export default {
  name: 'QuestionItem',
  components: {
    Question,
    Answer
  },
  computed: {
    answerOptions() {
      if (this.questionItem.type === 'boolean') {
        return ["True", "False"]
      }

      let options = this.questionItem.incorrect_answers
      options.push(this.questionItem.correct_answer)
      return _.shuffle(options)
    }
  },
  props: {
    questionItem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>