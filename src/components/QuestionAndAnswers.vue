<template>
  <div>
    <h1 class="question">{{leftNumber}}  {{operatorChar}}  {{rightNumber}}</h1>

    <div>
      <button class="answer-button" @click="selectAnswer($event, answersList[0])">{{answersList[0]}}</button>
      <button class="answer-button" @click="selectAnswer($event, answersList[1])">{{answersList[1]}}</button>
      <button class="answer-button" @click="selectAnswer($event, answersList[2])">{{answersList[2]}}</button>
    </div>

    <button class="big-button next-button" v-if="answerSelected" @click="$emit('nextQuestion')">Next</button>
  </div>
</template>

<script>
export default {
  name: 'QuestionAndAnswers',
  props: {
    operatorList: Array
  },
  data () {
    return {
      leftNumber: this.generateRandomNumber(),
      rightNumber: this.generateRandomNumber(),
      operatorValue: this.operatorList[Math.floor(Math.random() * this.operatorList.length)],
      operatorChar: '',
      answersList: [],
      answerSelected: false,
      answeredCorrectly: false
    }
  },
  created () {
    this.answersList = this.createAnswers()
  },
  methods: {
    createAnswers () {
      const answers = []
      const randomOtherLeftNumber = this.generateRandomNumber()
      const randomOtherRightNumber = this.generateRandomNumber()

      switch (this.operatorValue) {
        case 'addition':
          this.correctAnswer = this.leftNumber + this.rightNumber
          this.operatorChar = '+'
          answers.push(this.correctAnswer)
          answers.push(randomOtherLeftNumber + this.rightNumber)
          answers.push(this.leftNumber + randomOtherRightNumber)
          break
        case 'subtraction':
          this.correctAnswer = this.leftNumber + this.rightNumber
          this.operatorChar = '-'
          answers.push(this.leftNumber - this.rightNumber)
          answers.push(randomOtherRightNumber - this.rightNumber)
          answers.push(this.leftNumber - randomOtherLeftNumber)
          break
      }
      answers.sort(() => Math.random() - 0.5)
      return answers
    },
    selectAnswer ($event, answer) {
      this.answerSelected = true
      if (answer === this.correctAnswer) {
        $event.target.classList.add('correct-answer')
        this.answeredCorrectly = true
      } else {
        $event.target.classList.add('wrong-answer')
        this.answeredCorrectly = false
      }
    },
    generateRandomNumber () {
      return Math.ceil(Math.random() * 10) * (Math.round(Math.random()) ? 1 : -1)
    }
  }
}
</script>
