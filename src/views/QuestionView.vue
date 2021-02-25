<template>
  <div>
      <div v-for="(questionItem, index) of questionItems" :key="index">
          <question-item :question-item="questionItem" />
          <!--TODO question number, e.g. 1/10-->
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import QuestionItem from '../components/question/QuestionItem.vue'

export default {
    name: 'QuestionView',
    components: { 
        QuestionItem
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