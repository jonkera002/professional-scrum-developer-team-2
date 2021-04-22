import { shallowMount } from '@vue/test-utils'
import Practice from '@/views/Practice.vue'

describe('Practice.vue', () => {
  let wrapper
  beforeEach( () => {
    wrapper = shallowMount(Practice, {})
  })

  describe('nextQuestion method', () => {
    it('should increase the value of questionNumber with 1', () => {
      wrapper.vm.questionNumber = 1;
      wrapper.vm.nextQuestion();
      expect(wrapper.vm.questionNumber).toEqual(2);
      wrapper.vm.nextQuestion();
      expect(wrapper.vm.questionNumber).toEqual(3);
    })
  })
})
