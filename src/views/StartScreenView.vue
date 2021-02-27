<template>
  <div>

    <h1>Geography Trivia Game</h1>

    <p>
      How well do you know your geography? 
      This quiz will put your knowledge to the test!
    </p>

  <!--Redirect button to questions-->
  <button v-on:click="startgame">Start game</button>

  </div>
</template>

<script>
var starter = new Vue({
  el: '#starter',
  data: {
    name: 'Vue.js'
  },

  methods: {
    startgame: function (event) {

      // redirects to QuestionView when the button is clicked
      this.$router.push('/views/QuestionView.vue'); 
      }
    }
})
starter.startgame()
</script>

<!-- CSS styling - complete unless specified elsewhere -->
<style>

</style>