'use strict';

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

/**
 * Resolves the file paths
 */
module.exports = {
    appIndexJs: resolveApp('src/index.js'),
    appOutput: resolveApp('src/dist'),
    appHtml: resolveApp('public/index.html'),
    appSrc: resolveApp('src'),
    serverProxy: `http://localhost:5000`
}