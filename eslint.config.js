// eslint.config.js
import prettierPlugin from "eslint-plugin-prettier";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import angularPlugin from "@angular-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
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
      "@angular-eslint/template": angularPlugin.template,
    },
    languageOptions: {
      parser: angularPlugin.templateParser,
    },
    rules: angularPlugin.configs["recommended"].rules,
  },
];
