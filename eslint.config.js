// eslint.config.js
import prettierPlugin from "eslint-plugin-prettier";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import angularPlugin from "@angular-eslint/eslint-plugin";
import angularTemplatePlugin from "@angular-eslint/eslint-plugin-template";
import angularTemplateParser from "@angular-eslint/template-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: "./tsconfig.eslint.json",
				tsconfigRootDir: __dirname,
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			"prettier/prettier": "error",
		},
	},
	{
		files: ["**/*.html"],
		plugins: {
			"@angular-eslint/template": angularTemplatePlugin,
		},
		languageOptions: {
			parser: angularTemplateParser,
		},
		rules: { ...angularTemplatePlugin.configs.recommended.rules },
	},
];
