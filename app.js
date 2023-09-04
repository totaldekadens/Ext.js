/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "MyApp.Application",

  name: "MyApp",

  requires: [
    // This will automatically load all classes in the MyApp namespace
    // so that application classes do not need to require each other.
    "MyApp.*",
  ],

  launch: function () {
    viewport = Ext.getCmp("viewport"); // hämtar komponenten "viewport" i MyApp.view.Viewport
    target = viewport.down("#viewport-target"); // Hämtar item som har id: viewport-target
    view = Ext.create("MyApp.view.main.Extra"); // Skapar en view som innehåller Main-komponenten
    target.add(view); // Lägger till view som innehåller Main-komponenten i item med id: viewport-target
  },

  // The name of the initial view to create.
  //mainView: "MyApp.view.main.Main",
  mainView: "MyApp.view.main.Extra",

  autoCreateViewport: true, //  Using Viewport file if it exists
});
