const { mdjsTransformer } = require('@mdjs/core');

module.exports = {
  nodeResolve: true,
  open: 'README.md',
  watch: true,
  responseTransformers: [mdjsTransformer],
};
