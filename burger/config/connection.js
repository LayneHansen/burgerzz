// connect to mysql
const mysql = require("mysql");

// const inquirer = require("inquirer");
// const env = require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "W@shNat$2019",
    // password: process.env.password,
    database: "burger_db"
});
console.log(connection);

// connect node to sql
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection);
})

// export connection
module.exports = connection;