<template>
  <div id="app">
    <app-header title="Vue Trivia Game" />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
    name: 'App',
    components: {
        AppHeader
    },
    mounted() {
        // app starts from the root (i.e. StartView)
        this.$router.replace('/')
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
