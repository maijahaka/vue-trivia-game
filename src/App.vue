<template>
  <div id="app">
    <app-header title="Vue Trivia Game"/>
    <!--TODO temporarily here before implementing logic for moving to questions-->
    <question-view />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import QuestionView from './views/QuestionView.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    QuestionView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
