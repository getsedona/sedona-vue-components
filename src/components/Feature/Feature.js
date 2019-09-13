import Vue from 'vue'

import './index.less'

const defaultAvatarStyle = {
  backgroundColor: '#fed891',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
}

export default Vue.extend({
  name: 'Feature',
  functional: true,
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
  render(h, { slots, props }) {
    const avatarSlot =
      /** @slot Use this slot to have a header */
      slots().avatar ||
      h('div', {
        style: defaultAvatarStyle,
      })
    const avatar = h('div', { class: 'feature__accent' }, [avatarSlot])

    const content = h('div', { class: 'feature__content' }, [
      h('div', { class: 'wysiwyg' }, [
        ...(slots().title ? [slots().title] : [h('h3', props.title)]),
        ...(slots().subTitle ? [slots().subTitle] : [h('p', props.subTitle)]),
      ]),
    ])

    return h('div', { class: 'feature' }, [avatar, content])
  },
})
