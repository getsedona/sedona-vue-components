<template>
  <div id="app">
    <feature
      title="Title"
      sub-title="Subtitle"
    />
    <product-card />
  </div>
</template>

<script>
  import { Feature, ProductCard } from '../src'

  export default {
    name: 'App',
    components: {
      Feature,
      ProductCard,
    },
  }
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
