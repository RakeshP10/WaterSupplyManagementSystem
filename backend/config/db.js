const mysql = require("mysql");

//Mysql
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Watersupply",
  });

  module.exports = db;
