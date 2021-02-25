<template>
  <!--TODO add handler-->
  <button>{{ decodedAnswer }}</button>
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
  }
}
</script>

<style>

</style>