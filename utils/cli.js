const axios = require('axios');
const jsonFile = require('jsonfile');
const user = require('./user');
const display = require('./display');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');

module.exports = async () => {
    let followers = [];
    let page = 1;
    const username = await user();
    const spinner = ora('Fetching GitHub followers');
    spinner.start();

    try {
        while (true) {
            const options = {
                method: 'GET',
                url: `https://api.github.com/users/${username}/followers?page=${page}&per_page=100`,
            };

            const { data } = await axios(options);
            if (data.length === 0) break;

            data.map(follower => {
                followers.push(follower.login);
            });
            page++;
        }
        spinner.succeed();
        console.log('');
        display(followers);

        jsonFile.writeFile('./data/follower.json', followers, err => {});
    } catch (error) {
        spinner.fail();
        if (error.response.status === 404) {
            console.log('');
            console.log(symbols.error, chalk.hex('#FF0000').inverse(' ERROR '), 'Invalid username');
            const temp = [];
            jsonFile.writeFile('./data/user.json', temp, err => {});
        } else {
            console.log('');
            console.log(
                symbols.warning,
                chalk.hex('#FF0000').inverse(' WARNING '),
                'Try again later!'
            );
        }
    }
};
