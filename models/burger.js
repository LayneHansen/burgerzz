// require orm.js
const orm = require("../config/orm.js");

// call orm functions using specific input for the ORM
var burger = {
    all: function(cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("cats", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function (res) {
        cb(res);
    });
    }
};

module.exports = burger;