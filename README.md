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
