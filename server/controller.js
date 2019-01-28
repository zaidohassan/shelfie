const axios = require("axios");

module.exports = {
  getEndPoint: (req, res) => {
    const db = req.app.get("db");
    db.get_inventory()
      .then(results => {
        console.log(results);
        res.status(200).json(results);
      })
      .catch(err => {
        res.status(500).send("Theres a mistake", err);
      });
  },
  postEndPoint: (req, res) => {
    const db = req.app.get("db");
    const { productname, imageurl, price } = req.body;

    db.create_product([productname, imageurl, price])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("This Failed", error);
      });
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    db.delete_product(req.params.id)
      .then(results => res.status(200).json(results))
      .catch(err => {
        res.status(500).send("there was a mistake!!", err);
      });
  },

  editProduct: (req, res) => {
    const db = req.app.get("db");
    const { productname, url, price } = req.body;
    DataCue.delete_product([req.params.id, productname, url, price])
      .then(results => res.status(200).json(results))
      .catch(err => {
        res.status(500).send("there was a mistake!!", err);
      });
  }
};
