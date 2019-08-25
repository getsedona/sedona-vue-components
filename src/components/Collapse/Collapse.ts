import Vue, { CreateElement, VNode, PropType } from 'vue'
import './index.less'

export default Vue.extend({
  name: 'Collapse',
  props: {
    title: {
      type: String as PropType<string>,
      default: 'Collapse Title',
    },
  },
  data() {
    return {
      isShown: false as boolean,
    }
  },
  methods: {
    /**
     * Open panel content
     *
     * @public
     */
    open(): void {
      this.isShown = true
    },
    /**
    * Close panel content
    *
    * @public
    */
    close(): void {
      this.isShown = false
    },
    /**
   * Toggle panel content
   *
   * @public
   */
    toggle(): void {
      this.isShown = !this.isShown
    },
  },
  render(h: CreateElement): VNode {
    const title = this.$slots.title
      ? this.$slots.title
      : h('h3', [
        h(
          'button',
          {
            domProps: { type: 'button' },
            class: 'link',
            on: {
              click: (): void => this.toggle(),
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
