const { Input } = require('enquirer');
const jsonFile = require('jsonfile');
const pwd = process.cwd();

/*
 *
 * get user question
 */
const getInput = async () => {
	const prompt = new Input({
		name: 'question',
		message: 'Your github username?'
	});

	let answer;

	try {
		answer = await prompt.run();
	} catch (error) {
		console.error(error);
	}
	return answer;
};

try {
	const user = require(`${pwd}/username`);
	if (user.length > 1) module.exports = () => user;
	else throw err;
} catch (err) {
	module.exports = async () => {
		let username = '';

		while (username === '') {
			username = await getInput();
		}

		jsonFile.writeFile('./username.json', username, err => {});
		console.log('');
		return username;
	};
}
