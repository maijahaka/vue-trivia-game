<template>
  <div>
    <h3>Select difficulty:</h3>
    <button @click="startGame(easyUrl)">
      Easy
    </button>
    <button @click="startGame(mediumUrl)">
      Medium
    </button>
    <button @click="startGame(hardUrl)">
      Hard
    </button>
    <button @click="startGame(randomUrl)">
      Random
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { apiUrls } from '../../utils/api'

export default {
    name: 'StartView',
    data() {
        return {
            easyUrl: apiUrls.easy,
            mediumUrl: apiUrls.medium,
            hardUrl: apiUrls.hard,
            randomUrl: apiUrls.random
        }
    },
    methods: {
        async startGame(url) {
            // fetch questions from the API
            await this.fetchQuestionItems(url)
            // move to the first question
            this.$router.push('/questions/1')
        },
        ...mapActions(['fetchQuestionItems'])
    }

}
</script>

<style>

</style>