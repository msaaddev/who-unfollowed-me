const io = require('console-read-write');
const jsonFile = require('jsonfile');
const user = require('../data/user');

module.exports = async () => {
    if (user.length === 0) {
        io.write('Enter your GitHub username: ');
        const username = await io.read();
        jsonFile.writeFile('./data/user.json', username, err => {});
        console.log('');
        return username;
    } else return user;
};
