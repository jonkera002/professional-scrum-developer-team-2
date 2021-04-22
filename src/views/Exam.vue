<template>
  <div id="exam">
    <div v-if="examInProgress">
      <h1 class="title-on-page">Exam Question #{{questionNumber}}</h1>
      <question-and-answers
        :key="questionNumber"
        :operator-list="operatorList"
        @nextQuestion="nextQuestion"
      ></question-and-answers>
    </div>
    <div v-else>
      <h1 class="title-on-page">You have reached the end of the Exam</h1>
      <button class="big-button" @click="$emit('endQuiz')">End Exam</button>
    </div>

  </div>
</template>

<script>
import QuestionAndAnswers from '@/components/QuestionAndAnswers'
export default {
  name: 'Exam',
  components: {
    QuestionAndAnswers
  },
  props: {
    operatorList: Array
  },
  data () {
    return {
      questionNumber: 1,
      examInProgress: true
    }
  },
  methods: {
    nextQuestion () {
      this.questionNumber++
      this.examInProgress = this.questionNumber <= 15
    }
  }
}
</script>
