import Vue, { VNode, CreateElement, PropType } from 'vue'

import './index.less'

const defaultAvatarStyle = {
  backgroundColor: '#fed891',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
}

export default Vue.extend({
  name: 'Feature',
  props: {
    title: {
      type: String as PropType<string>,
      default: '',
    },
    subTitle: {
      type: String as PropType<string>,
      default: '',
    },
  },
  functional: true,
  render(h: CreateElement, { slots, props }): VNode {
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
