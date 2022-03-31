const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    devtool: 'source-map',
  },
  transpileDependencies: ['vuetify'],
});
