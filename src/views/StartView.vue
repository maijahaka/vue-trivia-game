<template>
  <div>
    <!--show an error message if data is not retrieved successfully-->
    <v-alert
      v-if="error"
      type="error"
    >
      The questions were not retrieved successfully. Please try again later.
    </v-alert>
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
      v-for="(levelUrl, index) of apiLevelUrls"
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
import { apiLevelUrls } from '../../utils/api'

export default {
    name: 'StartView',
    data() {
        return {
            apiLevelUrls,
            loading: false,
            error: false
        }
    },
    methods: {
        async startGame(url) {
            try {
                this.loading = true
                // fetch questions from the API
                await this.fetchQuestionItems(url)
                // move to the first question
                this.$router.push('/questions/1')
            } catch (error) {
                this.error = true
            } finally {
                this.loading = false
            }
        },
        ...mapActions(['fetchQuestionItems'])
    }

}
</script>

<style>

</style>