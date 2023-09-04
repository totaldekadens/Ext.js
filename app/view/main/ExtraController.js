Ext.define("MyApp.view.main.ExtraController", {
  extend: "Ext.app.ViewController", // Rekommenderas av Ext.js
  alias: "controller.extra", // Will be controller: 'extra' in view.
  init: function () {
    this.control({
      // What kind of event or what to access. // this: Accessing callController (itemId) from MyApp.view.main.Extra
      "#callController": {
        click: "callOnClick", // Function that will be called when the button is clicked
      },
    });
  },
  callOnClick: function () {
    alert("Hello from Controller");
  },
});
