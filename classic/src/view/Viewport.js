Ext.define("MyApp.view.Viewport", {
  extend: "Ext.container.Viewport",
  id: "viewport",
  items: [
    {
      region: "north",
      html: "<h1>Header</h1>",
    },
    {
      region: "center",
      xtype: "tabpanel",
      activeTab: 0,
      itemId: "viewport-target",
    },
    {
      region: "south",
      html: "<h1>Footer</h1>",
    },
  ],
});
