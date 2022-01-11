# Web app template

This is a web app template with [Parcel.js](https://parceljs.org/) suitable for most of my vanilla JavaScript projects.

## Running the app for development

1. Run `npm install` to download the dependencies. The `node_modules` folder will be created.
1. Run `npm run start` to start a server at `http://localhost:1234`.
 - Parcel.js will build the applications and make the artifacts available in the `dist` folder.
 - The SCSS files will be automatically converted to CSS files.
 - Chrome will open a new tab, displaying the application.
 - As you develop, Parcel.js will watch for code changes, and the browser will reload the page.
 - The contents of the `dist` folder are deleted by Parcel.js. So do not modify any files in the `dist` folder!

## Building the app

Run `npm run build` to build the application. And the application artifacts will be available in the `dist` folder.