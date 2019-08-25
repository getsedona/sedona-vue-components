import Vue, { CreateElement, VNode } from 'vue'
import './page.less'

export default Vue.extend({
  name: 'Page',
  functional: true,
  render(h: CreateElement, { slots }): VNode {
    return h('div', { class: 'page' }, slots().default)
  },
})
