var Airtable = require("airtable");
var base = new Airtable({
  apiKey:
    "patmdYbW280PO4iD6.a496ca4b7c4d143d63943d4e92240b6e9ecb2a19b5b7f01306c497114222ce2d",
}).base("appFkJKWLKJo8Go47");

base("Imported table")
  .select({
    maxRecords: 100,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function (record) {
        console.log("Retrieved", record.get("city"));
      });

      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
