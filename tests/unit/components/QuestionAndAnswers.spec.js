import { shallowMount } from '@vue/test-utils'
import QuestionAndAnswers from '@/components/QuestionAndAnswers.vue'

describe('QuestionAndAnswers.vue', () => {
  let wrapper
  beforeEach( () => {
    const operatorList = []
    global.Math.random = () => 0.5;

    wrapper = shallowMount(QuestionAndAnswers, {
      propsData: { operatorList }
    })
  })

  describe('createAnswers method', () => {
    describe('for addition (+) operator' , () => {
      beforeEach(async () => {
        wrapper.vm.operatorValue = 'addition'
        jest.spyOn(wrapper.vm, 'generateRandomNumber').mockReturnValue(7)
        await wrapper.vm.$forceUpdate()
      })
      it('should set correctAnswer',  () => {
        wrapper.vm.correctAnswer = 0
        wrapper.vm.createAnswers()

        expect(wrapper.vm.correctAnswer).toEqual(10)
      })
      it('should set operatorChar to +', () => {
        wrapper.vm.operatorChar = ''
        wrapper.vm.createAnswers()

        expect(wrapper.vm.operatorChar).toEqual('+')
      })
      it('should return a list of three answers, which includes correct and incorrect answer', () => {
        let response = wrapper.vm.createAnswers()
        expect(response.length).toEqual(3)
        expect(response).toEqual(expect.arrayContaining([10]));
        expect(response).toEqual(expect.arrayContaining([12]));
      })
  })
    describe('for subtraction (-) operator' , () => {
      beforeEach(async () => {
        wrapper.vm.operatorValue = 'subtraction'
        jest.spyOn(wrapper.vm, 'generateRandomNumber').mockReturnValue(7)
        await wrapper.vm.$forceUpdate()
      })
      it('should set correctAnswer',  () => {
        wrapper.vm.correctAnswer = 10
        wrapper.vm.createAnswers()

        expect(wrapper.vm.correctAnswer).toEqual(0)
      })
      it('should set operatorChar to -', () => {
        wrapper.vm.operatorChar = ''
        wrapper.vm.createAnswers()

        expect(wrapper.vm.operatorChar).toEqual('-')
      })
      it('should return a list of three answers, which includes correct and incorrect answer', () => {
        let response = wrapper.vm.createAnswers()
        expect(response.length).toEqual(3)
        expect(response).toEqual(expect.arrayContaining([0]));
        expect(response).toEqual(expect.arrayContaining([-2]));
        expect(response).toEqual(expect.arrayContaining([2]));
      })
    })
  })
  describe('selectAnswer method', () => {
    let event
    beforeAll(() => {
      event = {
        target: {
          classList: {
            add: jest.fn()
          }
        }
      }
    })
    it('should set answerSelected to true', () => {
      wrapper.vm.answerSelected = false
      wrapper.vm.selectAnswer(event, 1)
      expect(wrapper.vm.answerSelected).toEqual(true)
    })
    it('should add correct-answers to the target of the event and set answeredCorrectly when answer is correct', () => {
      wrapper.vm.answeredCorrectly = false
      wrapper.vm.correctAnswer = 1
      wrapper.vm.selectAnswer(event, 1)
      expect(wrapper.vm.answeredCorrectly).toEqual(true)
      expect(event.target.classList.add).toHaveBeenCalledWith('correct-answer')
    })
    it('should add wrong-answers to the target of the event and set answeredCorrectly when answer is incorrect', () => {
      wrapper.vm.answeredCorrectly = true
      wrapper.vm.correctAnswer = -1
      wrapper.vm.selectAnswer(event, 1)
      expect(wrapper.vm.answeredCorrectly).toEqual(false)
      expect(event.target.classList.add).toHaveBeenCalledWith('wrong-answer')
    })
  })
  describe('generateRandomNumber method', () => {
    it('should return a random number without decimals', () => {
      global.Math.random = () => 0.5
      expect(wrapper.vm.generateRandomNumber()).toEqual(5)
    })
    it('should return a random number with maximal 10', () => {
      global.Math.random = () => 1
      expect(wrapper.vm.generateRandomNumber()).toEqual(10)
    })
    it('should return a negative random number', () => {
      global.Math.random = () => 0.1
      expect(wrapper.vm.generateRandomNumber()).toEqual(-1)
    })
  })
})
