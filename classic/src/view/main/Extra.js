Ext.define("MyApp.view.main.Extra", {
  // Filen filväg: MyApp.view.main.Extra
  extend: "Ext.container.Container", // Använder container från Sencha
  xtype: "Extra", // Namn på huvudkomponent
  controller: "extra", // Gör så att det vi vill skall hända i ExtraController.js funkar. Se "alias" i den filen.
  // Kan vara blandat. Allt från komponenter, object osv
  items: [
    {
      title: "Extra view",
      html: " Dom will be here",
    },
    {
      xtype: "button",
      name: "click",
      text: "Call Controller",
      itemId: "callController",
    },
    {
      xtype: "button",
      name: "another",
      text: "Another Button",
      itemId: "anotherId",
    },
  ],
});
