const chalk = require('chalk');
const end = require('exit-cli');
const pkgJSON = require('../package.json');
const log = require('log-symbols');

module.exports = async () => {
	try {
		await end({
			github: `https://github.com/msaaddev/who-unfollowed-me`,
			twitter: `https://twitter.com/msaaddev`,
			pkgJSON
		});
	} catch (err) {
		console.log(err);
	}

	console.log();
	console.log(
		`${log.info} ${chalk.dim(
			'Liked my work?! Nominate @msaaddev for GitHub star: https://stars.github.com'
		)}`
	);
	console.log();
};
