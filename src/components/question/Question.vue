<template>
  <v-card-title class="justify-center">
    {{ decodedQuestion }}
  </v-card-title>
</template>

<script>
import { decode } from 'he'

export default {
    name: 'Question',
    props: {
        question: {
            type: String,
            required: true
        }
    },
    computed: {
        decodedQuestion() {
            // decode HTML encoded values returned by the API
            return decode(this.question)
        }
    }
}
</script>

<style>

</style>