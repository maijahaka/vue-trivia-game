<template>
  <button @click="onAnswerClicked">
    {{ decodedAnswer }}
  </button>
</template>

<script>
import { decode } from 'he'

export default {
    name: 'Answer',
    props: {
        answer: {
            type: String,
            required: true
        }
    },
    computed: {
        // decode HTML encoded values returned by the API
        decodedAnswer() {
            return decode(this.answer)
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