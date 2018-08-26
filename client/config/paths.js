'use strict';

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appIndexJs: resolveApp('src/index.jsx'),
    appOutput: resolveApp('src/dist'),
    appHtml: resolveApp('public/index.html'),
    appSrc: resolveApp('src'),
}