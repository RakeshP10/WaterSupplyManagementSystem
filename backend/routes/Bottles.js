const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.get("/", (req, res) => {
    db.query(
        "SELECT * FROM bottles",
    (err, results) => {
        console.log(err);
        res.send(results);
        }
    );
  });

router.post("/", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;
    db.query(
      "INSERT INTO bottles (id, name,price,image, description) VALUES (?, ?,?,?,?);",
      [id, name,price,image, description],
      (err, results) => {
        console.log(err);
        res.send(results);
      }
    );
  });

module.exports = router;