# Project Setup

## Install daisyUI and tailwindCSS

- Run following command to install dependencies

```bash
npm install daisyui@latest tailwindcss@latest @tailwindcss/postcss@latest postcss@latest
```

- Create tailwind.config.js file to configure tailwindCSS
- Create postcss.config.js file
- Follow daisyUI configure steps

## Install prettier and ESLint

### Prettier setup

- Install Prettier - Code formatter VS Code extension
- Run following command to install dev-dependencies

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin angular-eslint prettier-eslint
```

- Create .prettierrc file and add formatting rules

```bash
{
  "semi": true,
  "singleQuote": true,
  "useTabs": true,
  "tabWidth": 4,
  "trailingComma": "es5",
  "printWidth": 80
}
```

- Add script to package.json to run format command

```bash
"format": "npx prettier . --write"
```

### ESLint setup

- Install ESLint VS code extension
- Create eslint.config.js and configure the file
- Add following script in package.json file to fix eslint issues

```bash
"lint:fix": "npx eslint . --fix"
```

## Install Jest and remove Jasmine & Karma

### Remove Jasmine & Karma

- Run following command to remove Jasmine & Karma

```bash
npm uninstall --save-dev karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter jasmine-core @types/jasmine
```

### Install Jest

- Install Jest Runner VS Code extension to run tests directly from the spec files
- Run following command to install Jest

```bash
npm install --save-dev jest jest-preset-angular @types/jest @angular-builders/jest
```

- Create jest.config.js file to configure Jest
- Create setup-jest.ts file and update the "include" property in tsconfig.json file
- Replace jasmine with jest in tsconfig.spec.json file, under "types" array
- Update "test" -> "builder" property in angular.json file as follows

```bash
"builder": "@angular-builders/jest:run"
```

- Add following scripts to package.json file

```bash
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```

- clean node_modules and package-lock.json files using following commands and run `npm install` again

```bash
rm package-lock.json
rm -rf node_modules
npm install
```

## Install husky and lint-staged

- Run following command to install husky and lint-staged

```bash
npm install --save-dev husky lint-staged
```

- Initialize husky using following command

```bash
npx husky install
```

- Add following script to package.json file

```bash
"prepare": "husky install"
```

- Add pre-commit Git-hook by running following command

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

- Configure lint-staged in package.json file as follows

```bash
"lint-staged": {
  "*.{ts,js,json,html,css,scss}": [
    "eslint --fix",
    "prettier --write"
  ],
   "*.spec.ts": [
      "jest --bail --findRelatedTests"
    ]
}
```

- You can add pre-push Git-Hook to avoid push to master/main accidently

# Add proxy to avoid cors errors

- Create proxy.conf.json file and configure as follows

```bash
{
	"/api": {
		"target": "http://localhost:3000",
		"secure": false,
		"changeOrigin": true,
		"logLevel": "debug"
	}
}
```

- Add new dev script in package.json file as follows

```bash
"dev": "ng serve --proxy-config proxy.conf.json"
```
