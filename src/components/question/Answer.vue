<template>
  <v-btn
    block
    class="my-2 text-wrap"
    @click="onAnswerClicked"
  >
    {{ decodedAnswer }}
  </v-btn>
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
.v-btn {
    display: inline-block !important;
}

.v-btn:focus::before {
    background-color: white !important;
}
</style>