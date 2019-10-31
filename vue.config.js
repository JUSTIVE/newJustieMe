module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/global.css";
                      @import "~@/assets/mixins.scss";`
      },
    }
  }
}