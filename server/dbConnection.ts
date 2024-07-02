import { Connection } from "mysql2";

var mysql = require("mysql2");
var con: Connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "123",
});

con.connect((err) => {
  if (err) {
    console.error("database connection error", err.stack);
    return;
  }
  con.execute("CREATE DATABASE IF NOT EXISTS cars");
  con.changeUser({ database: "cars" });
  con.execute(
    "CREATE TABLE cars (carId int, brand varchar(255), model varchar(255))"
  );
  console.log("connected to database");
});

export { con };
