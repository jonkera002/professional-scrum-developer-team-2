<template>
  <div id="app">
    <component v-bind:is="showView" :operator-list="operatorList" @startQuiz="goToView" @endQuiz="goToView"></component>
  </div>
</template>
<style src='./styles/styles.css'></style>

<script>
import Exam from '@/views/Exam'
import Home from '@/views/Home'
import Practice from '@/views/Practice'

export default {
  name: 'App',
  components: {
    Exam,
    Home,
    Practice
  },
  data () {
    return {
      operatorList: [],
      showView: 'Home'
    }
  },
  methods: {
    goToView (quizType, operatorList) {
      this.operatorList = operatorList !== undefined ? operatorList : []
      this.showView = quizType !== undefined ? quizType : 'Home'
    }
  }
}
</script>
