module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"array-callback-return": ["error", { checkForEach: true }],
		"no-constant-binary-expression": "error",
		"no-constructor-return": "error",
		"no-duplicate-imports": ["error"],
		"no-promise-executor-return": "error",
		"no-self-compare": "error",
		"no-unmodified-loop-condition": "error",
		"require-atomic-updates": "error",
		"no-infered-types": "off",
	},
};
