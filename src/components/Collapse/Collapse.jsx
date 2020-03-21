import Vue from 'vue'
import './index.less'

export default Vue.extend({
  name: 'Collapse',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShown: this.value,
    }
  },
  watch: {
    isShown(value) {
      /**
       * Change state event
       *
       * @since 0.0.3
       * @type {boolean}
       */
      this.$emit('input', value)
    },
    value(newValue) {
      this.isShown = newValue
    },
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
  render() {
    let title
    if (this.$slots.title) {
      title = this.$slots.title
    } else if (this.title !== '') {
      title = (
        <button class="link" type="button" onClick={() => this.toggle()}>
          {this.title}
        </button>
      )
    }

    const content = (
      <div class={['collapse', ...(this.isShown ? ['collapse--show'] : [])]}>
        {this.$slots.default}
      </div>
    )

    return (
      <div>
        {title}
        {content}
      </div>
    )
  },
})
