// require connection.js file
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, [table], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  createOne: function (table, cols, vals, cb) {
    var queryString = `INSERT INTO burgers (name, devoured) VALUES (?, 0)`;
    connection.query(queryString, vals[0], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (table, devoured, id, cb) {
    var queryString = "UPDATE ?? SET ? WHERE id=?;"; 
    connection.query(queryString, [table, devoured, id], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;