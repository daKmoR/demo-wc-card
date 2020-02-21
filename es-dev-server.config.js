const { mdjsTransformer } = require('@d4kmor/mdjs-core');

module.exports = {
  nodeResolve: true,
  open: 'README.md',
  watch: true,
  responseTransformers: [mdjsTransformer],
};
