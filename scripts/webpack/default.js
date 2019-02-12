const fs = require('fs');
const path = require('path');
const packages = require('../../package.json');
let componentsPath = path.resolve(process.cwd(), 'components');
let componentsList = {
    index: path.resolve(componentsPath, 'index.tsx')
};
fs.readdirSync(componentsPath).filter(e => {
    return path.parse(e).ext == "" && !/^\./.test(path.parse(e).name);
}).forEach((e) => {
    componentsList[e] = `${componentsPath}/${e}`;
});

module.exports = {
    componentsList: componentsList,
    packages: packages
}