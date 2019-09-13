import Vue from 'vue'
import get from 'lodash/get'

import './index.less'

export default Vue.extend({
  name: 'Card',
  props: {
    /**
     * Add **card--dark** class to card
     */
    dark: {
      type: Boolean,
      default: false,
    },
    /**
     * Add **card--light** class to card
     */
    light: {
      type: Boolean,
      default: false,
    },
    /**
     * Card title
     */
    title: {
      type: String,
      default: '',
    },
    /**
     * Card title tag
     * Default is **h3**
     */
    titleTag: {
      type: String,
      default: 'h3',
    },
    /**
     * Link href value
     */
    to: {
      type: String,
      default: '',
    },
    /**
     * If true for link will be use **nuxt-link**
     * Default is **router-link**
     */
    nuxt: {
      type: Boolean,
      default: false,
    },
    image: {
      type: [String, Object],
      default: '',
      validator: (value) =>
        typeof value === 'object' ? value.src !== undefined : true,
    },
    video: {
      type: [String, Object],
      default: '',
    },
  },
  computed: {
    /**
     * If image or video provided
     *
     * @returns {boolean} is media flag
     */
    isMedia() {
      return this.image !== '' || this.video !== ''
    },
    imageProp() {
      const result = {
        src: '',
        width: undefined,
        height: undefined,
        alt: undefined,
        title: undefined,
      }
      if (typeof this.image === 'string') {
        result.src = this.image
        return result
      }
      return Object.assign(result, this.image)
    },
  },
  render(h) {
    let accent = ''
    if (this.dark) accent = 'card--dark'
    else if (this.light) accent = 'card--light'

    /// Title
    const titleText = this.to === '' ? this.title : h('router-link', { props: { to: this.to } }, this.title)
    const title = h(
      this.titleTag,
      {},
      [titleText]
    )

    /// Body
    let body = ''
    if (Array.isArray(this.$slots.default)) {
      const tag = get(this.$slots, ['default', 0, 'tag'], undefined)
      body = tag ? this.$slots.default : h('p', this.$slots.default)
    }

    if (this.isMedia) {
      const image = h('img', { domProps: { ...this.imageProp } })
      body = h('div', { class: 'card__accent' }, [
        h('div', { class: 'card__media' }, [image]),
      ])
    } else {
      body = h('div', { class: 'wysiwyg' }, [title, body])
    }

    const content = h('div', { class: 'card__content' }, [body])
    return h('div', { class: ['card', accent] }, [content])
  },
})
