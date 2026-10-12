module.exports = function (babelApiVLG) {
  babelApiVLG.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
