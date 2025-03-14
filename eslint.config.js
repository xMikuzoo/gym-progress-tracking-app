import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

const isProd = import.meta.env?.PROD || false

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
	},
	{ ignores: ['**/dist/*', 'vite.config.ts'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: { parserOptions: { parser: tseslint.parser } },
	},
	eslintConfigPrettier,
	{
		rules: {
			'no-console': isProd ? 'warn' : 'off',
			'no-debugger': isProd ? 'warn' : 'off',
			'import/prefer-default-export': 'off',
			'no-shadow': 'off',
			'vue/v-on-event-hyphenation': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			quotes: ['error', 'single'],
			'@typescript-eslint/no-unused-vars': 'off',
			'vue/attributes-order': [
				'warn',
				{
					order: [
						'DEFINITION',
						'LIST_RENDERING',
						'CONDITIONALS',
						'RENDER_MODIFIERS',
						'GLOBAL',
						['UNIQUE', 'SLOT'],
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'EVENTS',
						'CONTENT',
						'ATTR_STATIC',
						'ATTR_DYNAMIC',
						'ATTR_SHORTHAND_BOOL',
					],
					alphabetical: false,
				},
			],
		},
	},
]
