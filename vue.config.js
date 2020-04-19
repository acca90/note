// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "~@/assets/scss/custom.scss";
                @import "~@/assets/scss/sidebar.scss";
                `
            }

        }
    }
}