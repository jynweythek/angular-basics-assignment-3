# Angular 5 Basics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## How to view

Run `npm install` inside this project folder to install all dependencies.
Make sure you use the latest version of the CLI (upgrade guide below).

Run `npm install -g @angular/cli` to install Angular CLI.

Run `ng serve` to see the app in action (try `npm start` in case `ng serve` fails).

## How to upgrade the CLI

To update Angular CLI to a new version, you must update both the global package and your project's local package.

### Global package

Run the below commands - only use `sudo` on Mac/ Linux.

`sudo npm uninstall -g angular-cli @angular/cli`

`npm cache clean --force`

`sudo npm install -g @angular/cli`

### Local package

`rm -rf node_modules dist # use rmdir /S/Q node_modules dist in Windows Command Prompt; use rm -r -fo node_modules,dist in Windows PowerShell`

`npm install --save-dev @angular/cli@latest`

`npm install`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
