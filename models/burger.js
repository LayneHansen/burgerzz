// require orm.js
const orm = require("../config/orm.js");

// call orm functions using specific input for the ORM
var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        console.log("Burger Created", cols, vals, cb);
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
    // create delete function
};

module.exports = burger;