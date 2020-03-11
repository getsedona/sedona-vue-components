import Vue from 'vue'

export default Vue.extend({
  name: 'GridItem',
  functional: true,
  render(h, { slots }) {
    return <div class="grid__item">{slots().default}</div>
  },
})
