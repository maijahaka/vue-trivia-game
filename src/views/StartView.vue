<template>
  <div>
    <button @click="onStartGameClicked">
      Start Game
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'StartView',
    methods: {
        async onStartGameClicked() {
            // fetch questions from the API
            await this.fetchQuestionItems()
            // move to the first question
            this.$router.push('/questions/1')
        },
        ...mapActions(['fetchQuestionItems'])
    }

}
</script>

<style>

</style>