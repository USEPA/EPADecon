module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry',
      },
    ],
  ],
  plugins: [
    [
      'transform-imports',
      {
        vuetify: {
          // eslint-disable-next-line no-template-curly-in-string
          transform: 'vuetify/es5/components/${member}',
          preventFullImport: false,
        },
      },
    ],
  ],
};
