const path = require('path');

module.exports = {
    extends: '../../rspack.config.library.template.js',
    // override specific settings here
    resolve: {
        alias: {
            // Point to BUILT packages, not source
            'shared': path.resolve(__dirname, '../shared/dist'),
        },
    },
}