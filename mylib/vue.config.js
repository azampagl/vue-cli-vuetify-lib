const path = require('path');

const env = process.env;
const isProd = env.NODE_ENV === 'production';
const isStage = env.NODE_ENV === 'staging';
const isDev = env.NODE_ENV === 'development';

module.exports = {
    configureWebpack: {
        externals: {
            'vue': 'vue',
            'vue-class-component': 'vue-class-component',
            'vue-property-decorator': 'vue-property-decorator',
            'vue-router': 'vue-router',
            'vuex': 'vuex',
            'vee-validate': 'vee-validate',
            'vuetify': 'vuetify'
        },
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            }
        }
    }
};