import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    label: {
      type: String as PropType<string>,
      default: 'I am button',
    },
  },
  render(h) {
    return h('button', this.label)
  },
})
