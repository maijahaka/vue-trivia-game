<template>
  <div>
      <div v-for="(questionItem, index) of questionItems" :key="index">
          <question-header :question="questionItem.question" />
          <!--TODO pass correct answer-->
          <div v-if="questionItem.type === 'boolean'">
            <boolean-question />
          </div>
          <!--TODO pass correct answer-->
          <div v-if="questionItem.type === 'multiple'">
            <multiple-choice-question
              :correctAnswer="questionItem.correct_answer" 
              :incorrectAnswers="questionItem.incorrect_answers"
            />
          </div>
          <!--TODO question number, e.g. 1/10-->
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import QuestionHeader from '../components/question/QuestionHeader.vue'
import BooleanQuestion from '../components/question/BooleanQuestion.vue'
import MultipleChoiceQuestion from '../components/question/MultipleChoiceQuestion.vue'

export default {
    name: 'QuestionView',
    components: { 
        QuestionHeader,
        BooleanQuestion,
        MultipleChoiceQuestion 
    },
    data() {
        return {
            questionItems: []
        }
    },
    created() {
        // TODO inject URL as props
        // TODO move script to a separate file?
        // TODO error handling
        // TODO use async/await syntax?
        // TODO encoding problem with apostrophes and quotation marks
        axios
            .get('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy')
            .then(response => {
                this.questionItems = response.data.results
            })
    }
}
</script>

<style>

</style>