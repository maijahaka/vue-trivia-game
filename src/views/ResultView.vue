<template>
  <div>
    <h2>Results</h2>
    <div>Your score: {{ score }}</div>
    <table>
      <tr>
        <th>Question</th>
        <th>Correct answer</th>
        <th>Your answer</th>
      </tr>
      <tr
        v-for="(questionItem, index) of questionItems"
        :key="index"
      >
        <!--decode HTML encoded values received from the API-->
        <td>{{ decode(questionItem.question) }}</td>
        <td>{{ decode(questionItem.correct_answer) }}</td>
        <td>{{ decode(questionItem.selected_answer) }}</td>
      </tr>
    </table>
    <button @click="onPlayAgainClicked">
      Play again
    </button>
  </div>
</template>

<script>
import { decode } from 'he'
import { mapState } from 'vuex'

export default {
    name: 'ResultView',
    data() {
        return {
            pointsPerCorrectAnswer: 10
        }
    },
    computed: {
        ...mapState(['questionItems']),
        correctAnswers() {
            return this.questionItems.filter(this.checkIfCorrect).length
        },
        score() {
            return this.correctAnswers * this.pointsPerCorrectAnswer
        }
    },
    methods: {
        onPlayAgainClicked() {
            this.$router.push('/')
        },
        checkIfCorrect(questionItem) {
            return questionItem.selected_answer === questionItem.correct_answer
        },
        decode(text) {
            return decode(text)
        }
    }
}
</script>

<style>

</style>