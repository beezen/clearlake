const digo = require('digo');
const base = require('./scripts/base.js');
const doc = require('./scripts/doc.js');
var exports = module.exports = Object.assign({}, base, doc);

/**
 * 发布
 */
exports.prepublish = () =>{
    digo.exec("npm run build");
    digo.exec("npm run es");
    digo.exec("npm run doc");
    digo.exec("npm run test-build")
}