const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const routers = require("./router/router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", routers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
