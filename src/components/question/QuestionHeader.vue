<template>
  <div>
      <h2>{{ question }}</h2>
  </div>
</template>

<script>
export default {
  name: 'QuestionHeader',
  props: {
    question: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>