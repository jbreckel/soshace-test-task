
const production = require('./tools/webpack/webpack.config.production')
const development = require('./tools/webpack/webpack.config.development')

module.exports = process.env.NODE_ENV === 'production' ? production : development
