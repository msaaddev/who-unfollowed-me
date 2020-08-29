const { cyan, dim } = require('chalk');
const io = require('console-read-write');

module.exports = () => {
    io.write(dim(cyan('\nStar ⭐️ the repo: https://github.com/msaaddev/who-unfollowed-me')));
    io.write(dim(cyan('Connect with me: https://twitter.com/MSaaddev/\n')));
};
