<template>
  <div id="app">
    <developer year="2003" />

    <feature
      title="Title"
      sub-title="Subtitle"
    />
    <product-card />
  </div>
</template>

<script>
  import { Feature, ProductCard, Developer } from '../src'

  export default {
    name: 'App',
    components: {
      Feature,
      ProductCard,
      Developer,
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
