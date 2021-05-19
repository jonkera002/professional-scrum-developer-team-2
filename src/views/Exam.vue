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
      <h2>The success score is: {{ correctAnswer }} / {{ questionNumber -1 }} = {{ 100 * correctAnswer / (questionNumber -1) }}%</h2>

      <div v-for="(answer, index) in answers" :key="index">
        {{ answer.question}} = {{ answer.correctAnswer }}, Answered: {{ answer.answer }}, Is correct: {{ answer.isCorrect }}
      </div>
      <h2>Nice job!!</h2>
      <div>
        <button class="big-button" @click="$emit('endQuiz')">End Exam</button>
      </div>
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
      correctAnswer: 0,
      answers: [],
      examInProgress: true
    }
  },
  methods: {
    nextQuestion (question, correctAnswer, answer, isCorrect) {
      this.questionNumber++
      if (isCorrect) {
        this.correctAnswer++
      }
      this.answers.push({ question, correctAnswer, answer, isCorrect })
      this.examInProgress = this.questionNumber <= 5
    }
  }
}
</script>
