Ext.define("MyApp.store.Extra", {
  extend: "Ext.data.Store",
  alias: "store.extra",
  data: {
    items: [
      {
        name: "Ange",
        email: "Ange@enterprise.com",
        phone: "555-111-1111",
      },
      {
        name: "Sigge",
        email: "sigge.moghsson@enterprise.com",
        phone: "555-222-2222",
      },
      {
        name: "Greger",
        email: "greger.troi@enterprise.com",
        phone: "555-333-3333",
      },
      { name: "Sten", email: "mr.sten@enterprise.com", phone: "555-444-4444" },
    ],
  },
  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
