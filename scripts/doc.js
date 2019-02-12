const digo = require('digo');
const fs = require('fs');
const path = require('path');
const markdownIt = require("markdown-it");

/**
 * 编译站点接口文档
 */
exports.buildDoc = () => {
    digo.exec('typedoc');
}

/**
 * 文档服务
 */
exports.server = () => {
    return digo.startServer({
        port: 9998,
        task: exports.buildDoc,
        root: "site"
    });
}