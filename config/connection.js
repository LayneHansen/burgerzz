// connect to mysql
const mysql = require("mysql");

// const inquirer = require("inquirer");
// const env = require("dotenv").config();

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "W@shNat$2019",
    // password: process.env.password,
    database: "burger_db"
    })
}

// connect node to sql
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

// export connection
module.exports = connection;