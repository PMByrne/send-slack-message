if (typeof Promise === 'undefined'){
    require('es6-promise').polyfill()
}
module.exports = require('./lib/SendSlackMessage')