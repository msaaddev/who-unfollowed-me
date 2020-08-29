const io = require('console-read-write');
const jsonFile = require('jsonfile');
const pwd = process.cwd();

try {
    const user = require(`${pwd}/user`);
    if (user.length > 1) module.exports = () => user;
    else throw err;
} catch (error) {
    module.exports = async () => {
        io.write('Enter your GitHub username: ');
        const username = await io.read();
        jsonFile.writeFile('./user.json', username, err => {});
        console.log('');
        return username;
    };
}
