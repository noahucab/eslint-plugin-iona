# eslint-config-iona

This ESLint rule sets are opinionated which is specific for **Iona**'s own code formatting flavors. It is based on the **Airbnb**'s style guide which helps developers write code in a more reasonable approach and well-organized code. It is very popular with JavaScript developers and one of the most followed pack of coding standards for writing JavaScript. It covers all aspects of coding in JavaScript right from guidelines for variable declarations, functions, events, test code to performance related tips.

## Prerequisites

Before we go with the installation, let's first install the following:

1. Search and install **ESLint** and **Prettier** plugins in your Visual Studio code.

2. In your VS Code, add the following lines to your `settings.json`.

```json
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

## Installation

We need an ESLint binaries to invoke linting rules to our project. Either you can do this by installing it globally or the best approach would be to install it locally (within our project). This would ensure our project is using the same version of ESLint by incorporating version control system (Git).

### 1. Install the required dependencies, you can list the library by running the command:

For **npm**, you can install it by running the command:

```
$ npx install-peerdeps --dev eslint-config-airbnb
```

For **yarn**, since there is no equivalent `npx` tool, we need to run this long command:

```
$ yarn add eslint-config-iona@0.0.11 @types/node@^16.7.13 @typescript-eslint/eslint-plugin@^4.31.0 @typescript-eslint/parser@^4.31.0 eslint@^7.32.0 eslint-config-airbnb@^18.2.1 eslint-config-airbnb-typescript@^14.0.0 eslint-config-prettier@^8.3.0 eslint-plugin-html@^6.1.2 eslint-plugin-import@^2.24.2 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-prettier@^4.0.0 eslint-plugin-react@^7.25.1 eslint-plugin-react-hooks@^4.2.0 prettier@^2.3.2 typescript@^4.4.2 @babel/eslint-parser@^7.15.4 @babel/preset-react@^7.14.5 --save-dev
```

### 2. Create `.eslintrc.json file and add the following code:

```json
{
  "extends": ["iona/typescript"]
}
```

If you are not using TypeScript (which we do not encourage),

```json
{
  "extends": ["iona"]
}
```

### 3. Create `.prettierrc.json` and add the following code:

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

This configuration file is based on the prettier rules set in the module. Like for example, the module will not auto-format the code if you don't terminate module imports with semicolon (`;`), thus it will show a squiggly line informing you to add a semicolon (`;`).

### 4. Customizing the ESLint configuration

By default, `console.log()` statements will cause warnings to our code. In some cases, removing `console.log()` statements may not be a priority. You can customize the ESLint configuration to allow console.log statements without producing an error message. ESLint configuration rules can be modified in the .eslintrc.json file.

Open up the `.eslintrc.json` file. This is the code you will see in that file:

```json
{
  "extends": ["iona"],
  "rules": {}
}
```

At the bottom of the `.eslintrc.json` file, you will see a "rules" object. To customize the errors that trigger ESLint or to disable ESLint’s response to certain pieces of code, you will add key-value pairs to the "rules" object. The key will match the name of the rule you want to add or change. The value will match the severity level of the issue. You have three choices for severity level:

For the choices for severity level:

- `error` - produces a red squiggly line

- `warn` - will produce a yellow squiggly line

- `off` - will not display anything

If you do not want to produce any error messages for console.log statements, you can use the no-console rule name as the key. Input off as the value for `no-console`:

```json
"rules" : {
  "no-console": "off"
}
```
