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
  data() {
      return {
          questionItem: {"category":"Geography","type":"multiple","difficulty":"easy","question":"Which country does Austria not border?","correct_answer":"France","incorrect_answers":["Slovenia","Switzerland","Slovakia"]}
      }
  },
  created() {
    const { id } = this.$route.params
    return id
  }
}
</script>

<style>

</style>