const followerList = require('../data/follower');
const table = require('./table');
const chalk = require('chalk');
const symbols = require('log-symbols');
const unfollow = require('./unfollow');

module.exports = followers => {
    if (followerList.length !== 0) {
        const list = unfollow(followers);
        if (list.length !== 0) {
            console.log(
                symbols.warning,
                chalk.hex('#FF0000').inverse(' WARNING '),
                'Following folk/s have unfollowed you recently.'
            );
            table(list);
        } else {
            console.log(
                symbols.info,
                chalk.hex('#FAD000').inverse(' INFO '),
                'Yeay! No one has unfollowed you recently.'
            );
        }
    } else {
        console.log('');
        console.log(
            symbols.success,
            chalk.hex('#DF661E').inverse(' INFO '),
            'Your username & followers list has been saved for later use.'
        );
    }
};
