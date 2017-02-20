module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		'arrow-parens': 0,
		'no-new': "off",
		'no-tabs': "off",
		'no-undef': "off",
		'no-extra-semi': "off",
		'space-before-function-paren': "off",
		'indent': ["error", "tab"],
		'generator-star-spacing': 0,
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
}
