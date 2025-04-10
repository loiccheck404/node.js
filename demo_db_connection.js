var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost:8080",
  user: "loiccheck",
  password: "Biyan4ever7#",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
