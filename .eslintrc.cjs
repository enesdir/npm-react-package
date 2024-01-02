/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'typescript-sort-keys',
		'unused-imports',
		'prettier',
		'prefer-arrow',
		'sort-class-members',
	],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:storybook/recommended',
	],
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				ignoreRestSiblings: true,
			},
		],
		'no-case-declarations': 'off',
		'no-console': [
			'error',
			{
				allow: ['warn', 'error', 'debug'],
			},
		],
		'no-useless-escape': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-nested-ternary': 'off',
		'no-plusplus': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'prettier/prettier': 'error',
		'react/destructuring-assignment': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'typescript-sort-keys/interface': 'error',
		'typescript-sort-keys/string-enum': 'error',
		'unused-imports/no-unused-imports': 'error',
		'prefer-arrow/prefer-arrow-functions': [
			'error',
			{
				disallowPrototype: true,
				singleReturnOnly: true,
				classPropertiesAllowed: false,
			},
		],
		'sort-class-members/sort-class-members': [
			'error',
			{
				order: [
					'[static-properties]',
					'[properties]',
					'[conventional-private-properties]',
					'constructor',
					'[static-methods]',
					'[methods]',
					'[conventional-private-methods]',
				],
				accessorPairPositioning: 'getThenSet',
			},
		],
	},
}
