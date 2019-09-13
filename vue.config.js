module.exports = {
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            './node_modules/sedona-components/src/common/variables.less',
            './node_modules/sedona-components/src/common/functions.less',
            './node_modules/sedona-components/src/common/mixins.less',
            './node_modules/sedona-components/src/base/variables.less',
            './node_modules/sedona-components/src/base/mixins.less',
          ],
        })
        .end()
    })
  },
}
