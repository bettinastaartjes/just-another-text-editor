# Description
A text editor app that runs in the browser. This is a single page application that meets the PWA crtiera and also functions offline. This app is deployed to Heroku. 

# Installation
To use the app ,run npm install command to install dependencies. Then run npm run start:dev.

# Heroku Deployed Link
Link: https://radiant-sierra-19408.herokuapp.com/

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client-server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the back end and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB database
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using Workbox
WHEN I register a service worker
THEN I should have my static assets precached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Mock-Up

The following animation demonstrates the application functionality:

![Demonstration of the finished Module 19 Challenge being used in the browser and then installed.](./Assets/00-demo.gif)

The following image shows the application's `manifest.json` file:

![Demonstration of the finished Module 19 Challenge with a manifest file in the browser.](./Assets/01-manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.](./Assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished Module 19 Challenge with a IndexedDB storage named 'jate' in the browser.](./Assets/03-idb-storage.png)

## Getting Started

For this project, you will not be starting from scratch. Just like the module project, you will be provided starter code.

To build on the skills learned in **Lesson 2**, you will work with [webpack](https://webpack.js.org/), a module bundler for JavaScript that simplifies front-end web development to bundle JavaScript and the webpack's [HTMLWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) to generate an HTML page.

You will also use IndexedDB and [idb](https://www.npmjs.com/package/idb), a small wrapper that makes it easier to implement IndexedDB CRUD methods to add the ability to store structured data to the browser. If you find yourself stuck, review **Lesson 3**, where IndexedDB CRUD methods are covered.

To add offline function, you will use [Workbox](https://developers.google.com/web/tools/workbox), which is a set of libraries that can generate a production-ready service worker for your Progressive Web App. Service workers were covered in **Lesson 4**.

Finally, in **Lesson 5**, you learned how to make your app installable and deploy in production mode. For this project, you will practice those skills by adding an `manifest.json` and then deploy your finished application with Heroku.