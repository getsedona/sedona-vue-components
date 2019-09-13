import Vue from 'vue'
import './index.less'

export default Vue.extend({
  name: 'Collapse',
  props: {
    title: {
      type: String,
      default: 'Collapse Title',
    },
  },
  data() {
    return {
      isShown: false,
    }
  },
  methods: {
    /**
     * Open panel content
     *
     * @public
     */
    open() {
      this.isShown = true
    },
    /**
     * Close panel content
     *
     * @public
     */
    close() {
      this.isShown = false
    },
    /**
     * Toggle panel content
     *
     * @public
     */
    toggle() {
      this.isShown = !this.isShown
    },
  },
  render(h) {
    const title = this.$slots.title
      ? this.$slots.title
      : h('h3', [
        h(
          'button',
          {
            domProps: { type: 'button' },
            class: 'link',
            on: {
              click: () => this.toggle(),
            },
          },
          this.title
        ),
      ])
    const content = h(
      'div',
      { class: ['collapse', ...(this.isShown ? ['collapse--show'] : [])] },
      this.$slots.default
    )
    return h('div', { class: 'wysiwyg' }, [title, content])
  },
})
