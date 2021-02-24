<template>
  <div>
    <!--TODO show choices in random order-->
    <!--TODO add handlers-->
    <button>{{ correctAnswer }}</button>
    <button v-for="(answer, index) of incorrectAnswers" :key="index">{{ answer }}</button>
  </div>
</template>

<script>
export default {
    name: 'MultipleChoiceQuestion',
    props: {
        correctAnswer: String,
        incorrectAnswers: Array
    }
}
</script>

<style>

</style>