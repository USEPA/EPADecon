module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    devtool: 'source-map',
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'test' || process.env.npm_lifecycle_event === 'test:unit:debug') {
      const sassRule = config.module.rule('sass');
      sassRule.uses.clear();
      sassRule.use('null-loader').loader('null-loader');
      sassRule.oneOf('normal').uses.clear();
      sassRule
        .oneOf('normal')
        .use('null-loader')
        .loader('null-loader');
      config.merge({
        devtool: 'cheap-module-eval-source-map',
      });
    }
  },
};
