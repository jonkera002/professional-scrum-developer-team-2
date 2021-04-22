<template>
  <div id="practice">
    <button class="stop-button" @click="$emit('endQuiz')">Stop</button>

    <h1 class="title-on-page" style="display: inline-block">Practice Question #{{ questionNumber }}</h1>
    <question-and-answers
      :key="questionNumber"
      :operator-list="operatorList"
      @nextQuestion="nextQuestion"
    ></question-and-answers>
  </div>
</template>

<script>
import QuestionAndAnswers from '@/components/QuestionAndAnswers'

export default {
  name: 'Practice',
  components: {
    QuestionAndAnswers
  },
  props: {
    operatorList: Array
  },
  data () {
    return {
      questionNumber: 1
    }
  },
  methods: {
    nextQuestion () {
      this.questionNumber++
    }
  }
}
</script>
