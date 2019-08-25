import 'jest'
import { shallowMount } from '@vue/test-utils'
import Feature from './Feature'


describe('subtracts 5 - 1 to equal 4 in TypeScript', () => {
  test('sad', () => {
    const wrapper = shallowMount(Feature)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})