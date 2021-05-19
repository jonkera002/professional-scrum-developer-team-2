import { shallowMount } from '@vue/test-utils'
import Exam from '@/views/Exam.vue'

describe('Exam.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Exam, {})
  })

  describe('nextQuestion method', () => {
    it('should increase the value of questionNumber with 1', () => {
      wrapper.vm.questionNumber = 1
      wrapper.vm.nextQuestion()
      expect(wrapper.vm.questionNumber).toEqual(2)
      wrapper.vm.nextQuestion()
      expect(wrapper.vm.questionNumber).toEqual(3)
    })
    it('should set examInProgress to true when not reached question 6', () => {
      wrapper.vm.questionNumber = 3
      wrapper.vm.nextQuestion()
      expect(wrapper.vm.examInProgress).toEqual(true)
    })
    it('should set examInProgress to true when question 6 is reached (end of quiz)', () => {
      wrapper.vm.questionNumber = 5
      wrapper.vm.nextQuestion()
      expect(wrapper.vm.examInProgress).toEqual(false)
    })
  })
})
