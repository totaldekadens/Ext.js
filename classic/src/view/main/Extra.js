Ext.define("MyApp.view.main.Extra", {
  extend: "Ext.grid.Panel",
  xtype: "extra",
  title: "Grid",
  store: { type: "extra" }, // Hämtar datan från MyApp.store.Extra. Se alias i den filen (store.extra).
  columns: [
    {
      text: "Name",
      dataIndex: "name",
      flex: 1, // Kan göra styling direkt i objektet
    },
    {
      text: "Email",
      dataIndex: "email",
      flex: 1,
    },
    {
      text: "Phone",
      dataIndex: "phone",
      flex: 1,
    },
  ],
  height: 300,
  width: 400,
});
