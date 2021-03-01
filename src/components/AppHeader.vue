<template>
  <div class="pb-5 font-weight-black">
    {{ title }}
  </div>
</template>

<script>
export default {
    name: 'AppHeader',
    props: {
        title: {
            type: String,
            default: 'Vue Trivia Game'
        }
    }
}
</script>

<style scoped>
div {
  color: #0097A7;
  font-size: xx-large;
}
</style>
