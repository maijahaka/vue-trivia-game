<template>
  <div>
    <v-card-title class="justify-center">
      Select difficulty:
    </v-card-title>
    <v-progress-circular
      v-if="loading"
      indeterminate
      :size="25"
      :width="3"
    />
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
            apiUrls: apiUrls,
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