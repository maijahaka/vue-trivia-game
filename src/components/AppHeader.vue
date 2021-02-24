<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
