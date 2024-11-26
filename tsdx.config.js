const postcss = require ('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        module: true,
        inject: true,
        extract: !!options.writeMeta
      })
    );
    return config;
  }
}
