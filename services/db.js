const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vedansh@321",
  database: "shopping_list",
});

connection.connect();

module.exports = { connection };
