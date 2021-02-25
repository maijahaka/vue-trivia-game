<template>
  <div>
    <question-header :question="questionItem.question" />
    <div v-if="questionItem.type === 'boolean'">
      <boolean-question />
    </div>
    <div v-if="questionItem.type === 'multiple'">
      <multiple-choice-question
        :correct-answer="questionItem.correct_answer" 
        :incorrect-answers="questionItem.incorrect_answers"
      />
    </div>
  </div>
</template>

<script>
import QuestionHeader from './QuestionHeader'
import BooleanQuestion from './BooleanQuestion'
import MultipleChoiceQuestion from './MultipleChoiceQuestion'

export default {
  name: 'QuestionItem',
  components: {
    QuestionHeader,
    BooleanQuestion,
    MultipleChoiceQuestion
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