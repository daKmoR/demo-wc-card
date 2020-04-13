module.exports = {
  stories: [
    //
    '../README.md',
    '../docs/**/*.md',
  ],
  addons: [
    'storybook-prebuilt/addon-docs/register.js',
    'storybook-prebuilt/addon-viewport/register.js',
  ],
  esDevServer: {
    nodeResolve: true,
    watch: true,
    open: true,
  },
};
