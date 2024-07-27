const fs = require('fs');
const path = require('path');

function loadFollowers(filePath) {
	try {
		const absolutePath = path.resolve(process.cwd(), filePath);
		const data = fs.readFileSync(absolutePath, 'utf-8');
		return JSON.parse(data);
	} catch {}
}

function removeFollowers(followers, list) {
	if (!Array.isArray(followers) || !Array.isArray(list)) {
		return [];
	}

	const listSet = new Set(list);
	followers.forEach(follower => {
		listSet.delete(follower);
	});

	return Array.from(listSet);
}

const list = loadFollowers('follower.json');

module.exports = followers => {
	if (!list || list.length === 0) return list;
	return removeFollowers(followers, list);
};
