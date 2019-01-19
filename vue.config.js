module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://coffeehub.tokyo"
      }
    }
  },

  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "@/styles/global.scss";',
      }
    }
  },

  lintOnSave: false
};
