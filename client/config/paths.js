'use strict';

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolvew(appDirectory, relativePath);

model.exports = {
    appIndexJs: resolveApp('src/index.js'),
    appOutput: resolveApp('src/public'),
    appHtml: resolveApp('public/index.html'),
    appSrc: resolveApp('src'),
}