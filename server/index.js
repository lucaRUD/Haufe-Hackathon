const express = require("express");
const app = express();
const port = 4000;
const axios = require("axios");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/getdata", (req, res) => {
  latArray = [];
  axios
    .get(
      "https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab&limit=5"
    )
    .then(function (response) {
      res.send(response.data.result.records);
    });
});
// response.data.result.records
