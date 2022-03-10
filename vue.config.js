module.exports = {
  configureWebpack: {
    resolve:{
      extensions: [".js", ".vue", ".json"],
      // 别名
      alias: {
        assets:'@/assets',
        common:'@/common',
        components:'@/components',
        network:'@/network',
      }
    }
  }
}

