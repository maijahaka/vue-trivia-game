<template>
  <div>
    <v-card-title class="justify-center">
      Select difficulty:
    </v-card-title>
    <v-btn
      block
      class="my-2"
      @click="startGame(easyUrl)"
    >
      Easy
    </v-btn>
    <v-btn
      block
      class="my-2"
      @click="startGame(mediumUrl)"
    >
      Medium
    </v-btn>
    <v-btn
      block
      class="my-2"
      @click="startGame(hardUrl)"
    >
      Hard
    </v-btn>
    <v-btn
      block
      class="my-2"
      @click="startGame(randomUrl)"
    >
      Random
    </v-btn>
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