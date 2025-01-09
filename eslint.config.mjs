import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const eslintConfig = [
	{
		ignores: [
			"**/node_modules",
			"**/.next",
			"**/vite.config.ts",
			"**/.DS_Store",
			"**/dist",
			"**/dist-ssr",
			"**/*.local",
			"**/.eslintcache",
			"**/*.spec.tsx",
			"**/*.mjs",
			"**/*.md",
			"**/*.less",
			"**/*.css",
		],
	},
	...compat.extends(
		"@repo/eslint-config/library.js",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	),
	{
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: "module",
		},

		rules: {
			eqeqeq: "error",
			"no-unused-vars": "off",
			"no-implicit-coercion": "error",
			"consistent-return": "error",
			semi: "error",
			quotes: ["error", "double"],

			indent: [
				"error",
				"tab",
				{
					SwitchCase: 1,
					VariableDeclarator: 1,
					ignoredNodes: ["PropertyDefinition[decorators.length > 0]"],
				},
			],

			"@typescript-eslint/explicit-function-return-type": "error",
			"@typescript-eslint/no-implicit-any": "off",
		},
	},
	{
		files: ["**/*.ts"],

		rules: {
			"@typescript-eslint/indent": "off",
		},
	},
];

export default eslintConfig;
