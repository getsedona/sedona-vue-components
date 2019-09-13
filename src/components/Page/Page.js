import Vue from 'vue'
import './page.less'

export default Vue.extend({
  name: 'Page',
  functional: true,
  render(h, { slots }) {
    return h('div', { class: 'page' }, slots().default)
  },
})
