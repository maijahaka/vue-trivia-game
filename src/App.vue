<template>
  <v-app>
    <v-main>
      <v-container
        fluid
        class="pa-sm-15 pt-5"
      >
        <app-header title="Geography Quiz" />
        <v-card class="px-5 pb-5 justify-center">
          <router-view />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html { overflow-y: auto !important; }

.v-sheet {
  background-image: linear-gradient(white, #E0F7FA, #B2EBF2) !important;
}

.v-btn {
  background-color: white !important;
  text-transform: capitalize !important;
  font-weight: bold !important;
}

.v-btn:hover {
  background-color: #B2EBF2 !important;
}
</style>
