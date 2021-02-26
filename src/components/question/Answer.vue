<template>
  <!--TODO add handler-->
  <button @click="onAnswerClicked">{{ decodedAnswer }}</button>
</template>

<script>
import { decode } from 'he'

export default {
  name: 'Answer',
  computed: {
    decodedAnswer() {
      return decode(this.answer)
    }
  },
  props: {
    answer: {
      type: String,
      required: true
    }
  },
  methods: {
    onAnswerClicked() {
      this.$emit('selected-answer', this.answer)
    }
  }
}
</script>

<style>

</style>