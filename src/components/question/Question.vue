<template>
  <h2>{{ decodedQuestion }}</h2>
</template>

<script>
import { decode } from 'he'

export default {
  name: 'Question',
  computed: {
    decodedQuestion() {
      return decode(this.question)
    }
  },
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