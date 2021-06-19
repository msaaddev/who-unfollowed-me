const chalk = require('chalk');

module.exports = () => {
	console.log('');
	console.log(
		chalk.hex('#FAD000').inverse(' STAR '),
		'the CLI -> ',
		chalk.dim('https://github.com/msaaddev/who-unfollowed-me')
	);
	console.log(
		chalk.hex('#1da1f2').inverse(' CONNECT '),
		'with me on Twitter -> ',
		chalk.dim('https://twitter.com/msaaddev/\n')
	);
};
