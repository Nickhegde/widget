# Getting Started with App

There are 2 folders included here,

1. demoApp - This is done using [Create React App](https://github.com/facebook/create-react-app).
2. widgets - This is done using [Webpack](https://webpack.js.org/)

The applications are deployed here,

1. [demoApp](https://widget-demo-app.netlify.app/)
2. [widgets](https://card-widget.netlify.app/)

As you can see, demoApp has widgets application running within itself.

## How to run locally?

Here are the steps to be followed after cloning/downloading the repo,

1. Open terminal in widgets folder.
   a. Run the command `npm install`.

   b. Run the command `npm run webpack`.

   c. Run the command `npm start`.

   d. Application will start running at [http://localhost:8080](http://localhost:8080).

2. In demoApp folder, go to public/index.html file and replace <script src="https://card-widget.netlify.app/card_widget_bundle.js"></script> with <script src="http://localhost:8080/card_widget_bundle.js"><script>

3. Open terminal in demoApp folder.

   a. Run the command `npm install`.

   b. Run the command `npm start`.

   c. Application will start running at [http://localhost:3000](http://localhost:3000).

## What is happening?

The [widgets](https://card-widget.netlify.app/) application has two components basically, card_widget and feedback_widget which are bundled separately using [Code Splitting](https://webpack.js.org/guides/code-splitting/) and deployed. The component card_widget is complete and feedback_widget just has a text saying "Feedback Card".

The [demoApp](https://widget-demo-app.netlify.app/) uses one of the bundles from above, card_widget_bundle.js and loads it inside the application. Here, the widgets application acts like a micro-app.
