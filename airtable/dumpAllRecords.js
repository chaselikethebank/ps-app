var Airtable = require("airtable");
var base = new Airtable({
  apiKey:
    "patmdYbW280PO4iD6.a496ca4b7c4d143d63943d4e92240b6e9ecb2a19b5b7f01306c497114222ce2d",
}).base("appFkJKWLKJo8Go47");

const dumpAllData = async () => {
  const allRecords = [];

  await base("Imported table")
    .select({ view: "Grid view" })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          allRecords.push(record.fields);
        });
        fetchNextPage();
      },
      async function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Dump of all data:", allRecords);
      }
    );
};

dumpAllData();
