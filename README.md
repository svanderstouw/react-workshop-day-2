# JavaScript Bare Bones Project Build

This repository contains a minimal JS application build. This build supports current ES specs including ES2015 modules. Instructions for including PostCSS, React, Vue, Node, Express, and MongoDB coming soon.

## How to use this repository

1. Make sure you have the most current version of [node](https://nodejs.org/en/) installed on your machine. `node -v`
1. Make a repository for your new project.
1. Clone this repository to your local machine.
1. Replace the remote connection with your repository: `git remote remove origin && git remote add origin <your-repo-uri>`
1. Start making your application!

## Available `scripts`

### `yarn start`

Running `yarn start` will run your development server. This supports hot reloading so when you save changes your browser will automatically upload.

### `yarn build`

Running `yarn build` will create a production build of your application in the `dist` directory

## Additional packages

### PostCSS

To add PostCss support to this build, follow the instructions below:

First, install `postcss-loader` and dependencies: `yarn add postcss-loader postcss-import postcss-preset-env cssnano -D`

Next, create a `postcss.config.js` configuration file in your project root: `touch postcss.config.js` and give it the following content:

```javascript
module.exports = {
	parser: false,
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {},
		cssnano: {}
	}
}
```

Then, add the following line to your CSS rule in `webpack.config.js`: `'postcss-loader'`. Your `webpack.config.js` should now look like this:

```javascript
const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}
```

This setup includes `postcss-imports` to modularize CSS files, `postcss-preset-env` for next generation CSS support, and `cssnano` for minification.

## React

To add React to this build, follow the instructions below:

First, install `react` and `react-dom`: `yarn add react react-dom -S`.

Next, install Babel support for React: `yarn add @babel/preset-react -D`

Then, update the `.babelrc` configuration file to compile React and JSX:

`.babelrc`

```javascript
{
	"presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
