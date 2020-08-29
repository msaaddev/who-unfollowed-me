#!/usr/bin/env node

/**
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

// importing files & packages

const welcome = require('cli-welcome');
const cli = require('./utils/cli');
const end = require('./utils/end');
const pkgJSON = require('./package.json');

(module.exports = async () => {
    welcome({
        title: `Who Unfollowed Me — GitHub`,
        tagLine: `by ${pkgJSON.author.name}`,
        description: `${pkgJSON.description}`,
        bgColor: `#6cc644`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: `${pkgJSON.version}`,
    });

    await cli();

    end();
})();
