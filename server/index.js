require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const app = express();
const massive = require("massive");
const {
  getEndPoint,
  postEndPoint,
  deleteProduct,
  editProduct
} = require("./controller");

app.use(json());
const port = 3005;

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    console.log("DATABASE CONNECTED");
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/inventory", getEndPoint);
app.post("/api/inventory", postEndPoint);
app.delete("/api/inventory/:id", deleteProduct);
app.put("/api/inventory/:id", editProduct);
app.listen(port, () => console.log(`Listening on ${port}`));
