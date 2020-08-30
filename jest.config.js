module.exports = {
	roots: ['<rootDir>/src'],
	verbose: true,
	testMatch: [
		'**/__tests__/**/*.+(ts|tsx|js)',
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.js$': 'babel-jest',
	},
}
