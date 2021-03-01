<template>
  <div>
    <v-card-title class="justify-center">
      Select difficulty:
    </v-card-title>
    <!--show loading animation while loading content from the API-->
    <v-progress-circular
      v-if="loading"
      indeterminate
      :size="25"
      :width="3"
    />
    <!--show a button for each difficulty level-->
    <v-btn
      v-for="(levelUrl, index) of apiUrls"
      v-else
      :key="index"
      block
      class="my-2"
      @click="startGame(levelUrl.url)"
    >
      {{ levelUrl.level }}
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
            apiUrls,
            loading: false
        }
    },
    methods: {
        async startGame(url) {
            this.loading = true
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