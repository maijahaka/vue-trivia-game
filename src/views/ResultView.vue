<template>
  <div>
    <v-card-title class="justify-center">
      Results
    </v-card-title>
    <div
      id="score"
      class="font-weight-bold"
    >
      Your score: {{ score }}/{{ maxScore }}
    </div>
    <v-simple-table class="px-sm-5 mb-5">
      <thead>
        <tr>
          <th>Question</th>
          <th>Correct answer</th>
          <th>Your answer</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(questionItem, index) of questionItems"
          :key="index"
        >
          <!--decode HTML encoded values received from the API-->
          <td>{{ decode(questionItem.question) }}</td>
          <td>{{ decode(questionItem.correct_answer) }}</td>
          <td>{{ decode(questionItem.selected_answer) }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-btn @click="onPlayAgainClicked">
      Play again
    </v-btn>
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
        },
        maxScore() {
            return this.questionItems.length * this.pointsPerCorrectAnswer
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
td {
  text-align: left;
}

#score {
  color: #0097A7;
}
</style>