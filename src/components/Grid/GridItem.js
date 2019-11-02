import Vue from 'vue'

export default Vue.extend({
  name: 'GridItem',
  functional: true,
  render(h, { slots }) {
    return h('div', { class: 'grid__item' }, slots().default)
  },
})
