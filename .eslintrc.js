module.exports = {
		"env": {
				"browser": true,
				"es2021": true,
				es6: true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
				node: true // Node.js 全局变量和 Node.js 作用域
		},
		"extends": [
				"eslint:recommended",
				"plugin:vue/essential"
		],
		"parserOptions": {
				"ecmaVersion": "latest",
				"sourceType": "module"
		},
		"plugins": [
				"vue"
		],
		"rules": {
			'no-tabs': 0,
			'vue/html-closing-bracket-newline': 'off'
		}
}
