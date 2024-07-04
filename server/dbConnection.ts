import { Connection } from "mysql2";

const mysql = require("mysql2");
const con: Connection = mysql.createConnection({
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
    "CREATE TABLE IF NOT EXISTS cars (carId int, brand varchar(255), model varchar(255))"
  );
  con.execute('INSERT INTO cars (carId, brand, model) VALUES (1, "BMW", "M2")');
  console.log("connected to database");
});

module.exports = con;
