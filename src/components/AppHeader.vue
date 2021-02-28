<template>
  <div class="pb-5 text-sm-h3 text-h4 font-weight-black">
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

<style>

</style>
