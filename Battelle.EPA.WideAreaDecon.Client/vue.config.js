const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      fallback: {
        tty: require.resolve('tty-browserify'),
      },
    },
  },
});
