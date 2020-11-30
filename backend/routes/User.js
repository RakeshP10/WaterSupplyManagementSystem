const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const mobileno = req.body.mobileno;
  const password = req.body.password;
  db.query(
    "INSERT INTO registration (username, email,mobileno,password) VALUES (?, ?,?,?);",
    [username, email,mobileno, password],
    (err, results) => {
      console.log(err);
      res.send(results);
    }
  );
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM registration WHERE username = ?",
    username,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      if (results.length > 0) {
        if (password == results[0].password) {
          res.json({ loggedIn: true, username: username });
        } else {
          res.json({
            loggedIn: false,
            message: "Wrong username/password combo!",
          });
        }
      } else {
        res.json({ loggedIn: false, message: "User doesn't exist" });
      }
    }
  );

});

router.post("/contactus", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const telnum = req.body.telnum;
  const email = req.body.email;
  const message = req.body.message;
  db.query(
    "INSERT INTO feedback (firstname, lastname,telnum,email,message) VALUES (?, ?,?,?,?);",
    [firstname, lastname,telnum, email,message],
    (err, results) => {
      console.log(err);
      res.send(results);
    }
  );
});


router.get("/getprofile", (req, res) => {
  db.query(
    "SELECT * FROM registration",
    (err, results) => {
      if (err) {
        console.log(err);
      }
      else{
        console.log(results);
        res.send(results);
      }
    }
  );
});
module.exports = router;