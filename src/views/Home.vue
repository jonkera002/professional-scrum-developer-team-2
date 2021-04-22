<template>
  <div>
    <h1 class="title-on-page">Which operators would you like to use?</h1>
    <div>
      <button ref="addition" @click="selectOperator('addition')" data-testid="operator-button">+</button>
      <button ref="subtraction" @click="selectOperator('subtraction')" data-testid="operator-button">-</button>
    </div>

    <div class="start-buttons">
      <button class="big-button" v-if="operatorList.length > 0" @click="$emit('startQuiz', 'Practice', operatorList)" data-testid="practice-button">
        Practice
      </button>
      <button class="big-button" v-if="operatorList.length > 0" @click="$emit('startQuiz', 'Exam', operatorList)" data-testid="exam-button">
        Exam
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      operatorList: []
    }
  },
  methods: {
    selectOperator (operator) {
      if (!this.operatorList.includes(operator)) {
        this.operatorList.push(operator)
        this.$refs[operator].classList.add('operator-selected')
      } else {
        this.operatorList.splice(this.operatorList.indexOf(operator), 1)
        this.$refs[operator].classList.remove('operator-selected')
      }
    }
  }
}
</script>
