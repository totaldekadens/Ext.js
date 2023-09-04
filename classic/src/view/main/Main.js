/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define("MyApp.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",
  // Importer. Nu kan kan man hämta data från dessa filer. Tex loremIpsum i "data" från MyApp.view.main.MainModel
  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "MyApp.view.main.MainController",
    "MyApp.view.main.MainModel",
    "MyApp.view.main.List",
  ],

  controller: "main",
  viewModel: "main",

  ui: "navigation",

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: "stretchmax",
    },
    title: {
      bind: {
        text: "{name}", // "My App" från MyApp.view.main.MainModel
      },
      flex: 0,
    },
    iconCls: "fa-th-list",
  },

  tabBar: {
    flex: 1,
    layout: {
      align: "stretch",
      overflowHandler: "none",
    },
  },

  responsiveConfig: {
    tall: {
      headerPosition: "top",
    },
    wide: {
      headerPosition: "left",
    },
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: "left",
          textAlign: "left",
        },
        tall: {
          iconAlign: "top",
          textAlign: "center",
          width: 120,
        },
      },
    },
  },

  items: [
    {
      title: "Home",
      iconCls: "fa-home",
      // The following grid shares a store with the classic version's grid as well!
      items: [
        {
          xtype: "mainlist", // Visar mainList-komponent från MyApp.view.main.List
          //xtype: "Extra", // Visar Extra-komponent från MyApp.view.main.Extra
        },
      ],
    },
    {
      title: "Users",
      iconCls: "fa-user",
      bind: {
        html: "{loremIpsum}", // Från MyApp.view.main.MainModel
      },
    },
    {
      title: "Groups",
      iconCls: "fa-users",
      bind: {
        html: "{loremIpsum}", // Från MyApp.view.main.MainModel
      },
    },
    {
      title: "Settings",
      iconCls: "fa-cog",
      bind: {
        html: "{loremIpsum}", // Från MyApp.view.main.MainModel
      },
    },
  ],
});
