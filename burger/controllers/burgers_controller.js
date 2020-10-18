var express = require("express");

var router = express.Router();

// require burger.js
var burger = require("..models/burger.js");

// create router
router.get("/", function (req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req,res) {
    burger.create(["name", "western"], [req.body.name, req.body.western], function(result) {
    res.json({ id: result.insertId }); 

    });
});

router.put("/api/burgers/:id", function (req, res) function {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            western: req.body.western
        },
        condtion,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
              }
              res.status(200).end();
        }
    )
});

// export router
module.exports = router;