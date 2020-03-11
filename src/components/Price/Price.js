import Vue from 'vue'

import './price.less'

export default Vue.extend({
  name: 'Price',
  functional: true,
  props: {
    value: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: '₽',
    },
  },
  render(h, { props, data }) {
    const price = props.value.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1\u2009')
    const divClass = 'price-tag ' + (data?.staticClass || '')

    return (
      <div class={divClass}>
        <span class="price-tag__accent">{price}</span>
        <span class="price-tag__content">{props.currency}</span>
      </div>
    )
  },
})
