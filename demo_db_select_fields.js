var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  con.query(
    "SELECT name, address FROM customers",
    function (err, result, fields) {
      if (err) throw err;
      console.log(fields);
    }
  );
});
