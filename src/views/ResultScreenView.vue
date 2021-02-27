<template>
  <div>

  <!--Redirect button to questions-->
  <button v-on:click="restartgame">Re-start game</button>

  </div>
</template>

<script>
var restarter = new Vue({
  el: '#restarter',
  data: {
    name: 'Vue.js'
  },

  methods: {
    restartgame: function (event) {

      // redirects to QuestionView when the button is clicked
      this.$router.push('/views/StartScreenView.vue'); 
      }
    }
})
restarter.restartgame()
</script>

<!-- CSS styling - complete unless specified elsewhere -->
<style>

</style>
