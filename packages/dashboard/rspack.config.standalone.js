const path = require('path');

module.exports = {
    extends: '../../rspack.config.standalone.template.js',
    // override specific settings here
    // required: devServer.port
    resolve: {
        alias: {
            // Point to BUILT packages, not source
            'shared': path.resolve(__dirname, '../shared/dist'),
        },
    },

    devServer: {
        port: 3002,
    }
};
