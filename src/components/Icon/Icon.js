import Vue from 'vue'

import './index.less'

export default Vue.extend({
  name: 'Icon',
  functional: true,
  render(h, { slots }) {
    return h('span', { class: 'icon' }, slots().default)
  },
})
