import Vue from 'vue'

import './index.less'

export default Vue.extend({
  name: 'Scene',
  functional: true,
  props: {
    /**
     * Scene layout view
     *
     * @see See https://getsedona.github.io/sedona-vue-components/#/Layout/Scene
     * @public
     */
    view: {
      type: String,
      default: '',
      validator: (value) => ['fill', 'box', 'dark', 'light'].includes(value),
    },
  },
  render(h, { slots, props }) {
    const sceneClass = props.view ? `scene--${props.view}` : undefined

    return h('section', { class: ['scene', sceneClass] }, slots().default)
  },
})
