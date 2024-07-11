import { Connection } from "mysql2";

const mysql = require("mysql2");
const con: Connection = mysql.createConnection({
  host: "mysql",
  port: 3306,
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
    "CREATE TABLE IF NOT EXISTS cars (carId int AUTO_INCREMENT, brand varchar(255), model varchar(255), PRIMARY KEY (carId))"
  );
  con.execute(
    "CREATE TABLE IF NOT EXISTS users (userId int AUTO_INCREMENT, email varchar(255), password varchar(60), PRIMARY KEY (userId))"
  );
  // con.execute('INSERT INTO cars (brand, model) VALUES ("BMW", "M2")');
  console.log("connected to database");
});

module.exports = con;
