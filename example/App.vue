<template>
  <div id="app">
    <page>
      <scene>
        <grid view="amara">
          <grid-item>
            <feature
              title="Title"
              sub-title="Subtitle"
            />
          </grid-item>
          <grid-item>
            <feature
              title="Title"
              sub-title="Subtitle"
            />
          </grid-item>
          <grid-item>
            <feature
              title="Title"
              sub-title="Subtitle"
            />
          </grid-item>
          <grid-item>
            <feature
              title="Title"
              sub-title="Subtitle"
            />
          </grid-item>
        </grid>
      </scene>

      <scene>
        <developer year="2020" />
      </scene>
    </page>
  </div>
</template>

<script>
  import { Page, Scene, Grid, GridItem, Feature, Developer } from '../src'

  export default {
    name: 'App',
    components: {
      Page,
      Scene,
      Grid,
      GridItem,
      Feature,
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
