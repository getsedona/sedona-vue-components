import { mount } from '@vue/test-utils'
import Feature from './Feature'

const WrappedFeature = {
  components: { Feature },
  template: `
    <div>
      <Feature v-bind="$attrs" v-on="$listeners" />
    </div>
  `,
}

const wrapper = mount(WrappedFeature, {
  propsData: {
    title: 'Test title',
  },
})

describe('Feature Component', () => {
  test('test for props', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(
      wrapper
        .find('h3')
        .text()
    ).toBe('Test title')
  })
})
