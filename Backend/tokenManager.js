const activeTokens = new Set();

function addToken(token) {
	activeTokens.add(token);
}

function removeToken(token) {
	activeTokens.delete(token);
}

function isTokenActive(token) {
	return activeTokens.has(token);
}

module.exports = {
	addToken,
	removeToken,
	isTokenActive,
};
