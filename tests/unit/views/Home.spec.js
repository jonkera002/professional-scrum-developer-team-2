import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  let wrapper
  beforeEach( () => {
    const operatorList = []

    wrapper = shallowMount(Home, {
      propsData: { operatorList }
    })
  })
  describe('selectOperator method', () => {
    const classList = {
      add: jest.fn(),
      remove: jest.fn()
    };

    beforeEach(() => {
      wrapper.vm.$refs = {
        testOperator: {
          classList
        }
      }
    })

    it('should add the operator to the operatorList if not in there', () => {
      expect(wrapper.vm.operatorList).toEqual([])
      wrapper.vm.selectOperator('testOperator')
      expect(wrapper.vm.operatorList).toEqual(['testOperator'])
      expect(classList.add).toHaveBeenCalledWith('operator-selected')
    })
    it('should remove the operator from the operatorList if it is already in there', () => {
      wrapper.vm.operatorList = ['testOperator']
      wrapper.vm.selectOperator('testOperator')
      expect(wrapper.vm.operatorList).toEqual([])
      expect(classList.remove).toHaveBeenCalledWith('operator-selected')
    })
  })
})
