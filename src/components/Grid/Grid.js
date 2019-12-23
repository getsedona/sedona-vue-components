import Vue from 'vue'
import GridItem from './GridItem'

import './index.less'

export default Vue.extend({
  name: 'Grid',
  functional: true,
  components: {
    GridItem,
  },
  props: {
    /**
     * Grid layout view
     *
     * @see See https://getsedona.github.io/sedona-vue-components/#/Layout/Grid
     * @public
     */
    view: {
      type: String,
      default: 'sidar',
      validator: (value) => ['sidar', 'navahopi', 'jordan', 'meskit', 'amara'].includes(value),
    },
  },
  render(h, { slots, props }) {
    const gridClass = props.view ? `grid--${props.view}` : undefined

    return h('div', { class: ['grid', gridClass] }, slots().default)
  },
})
