const axios = require('axios');
const jsonFile = require('jsonfile');
const user = require('./user');
const display = require('./display');
const ora = require('ora');

module.exports = async () => {
    let followers = [];
    let page = 1;
    const username = await user();
    console.log('');
    try {
        const spinner = ora('Fetching GitHub followers');
        spinner.start();
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
        console.log(error);
    }
};
