// require orm.js
const orm = require("../config/orm.js");

// call orm functions using specific input for the ORM
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    createOne: function (cols, vals, cb) {
        console.log("Burger Created", cols, vals, cb);
        orm.createOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
    }
};

module.exports = burger;