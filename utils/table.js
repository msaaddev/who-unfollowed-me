const cliTable = require('cli-table');
const colors = require('colors');

module.exports = data => {
    const table = new cliTable({
        head: ['No.'.yellow, 'Users'.yellow, 'URL'.yellow],
    });

    data.map(n => {
        const url = `https://github.com/${n}`;
        const no = data.indexOf(n) + 1;
        table.push([no, n, url]);
    });

    console.log(table.toString());
};
