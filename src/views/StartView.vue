<template>
  <div>
    <button @click="onStartGameClicked">Start Game</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'StartView',
  methods: {
    async onStartGameClicked() {
        await this.fetchQuestionItems()
        this.$router.push('/questions/1')
    },
    ...mapActions(['fetchQuestionItems'])
  }

}
</script>

<style>

</style>