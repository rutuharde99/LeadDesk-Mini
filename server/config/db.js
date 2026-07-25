require("dotenv").config();

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {

  if (err) {
    console.log("Database Connection Failed");
    console.log(err);
    return;
  }

  console.log("✅ Database Connected Successfully");

});

module.exports = connection;