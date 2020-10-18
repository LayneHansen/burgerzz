// connect to mysql
const mysql = require("mysql");
// const inquirer = require("inquirer");
// const env = require("dotenv").config();
// const PORT = process.env.PORT || 3306;
// const app = express();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "burger_db"
});
console.log(connection);

// connect node to sql
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadID);
})

app.listen(PORT, function () {
    console.log("App listening on Port: " + PORT);
});


// export connection
module.exports = connection;