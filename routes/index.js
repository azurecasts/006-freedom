var express = require('express');
var router = express.Router();
var Datastore = require('nedb');
const path = require("path");

const dataFile = path.resolve(__dirname, "../data", "names.json");

db = new Datastore({ filename: dataFile, autoload: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  db.find({}, function(err,docs){
    res.render('index', { names: docs});
  })
  
});

router.post("/", function(req, res, next){
  const name = req.body.name;
  console.log("Saving to..", dataFile);
  db.insert({name: name}, function(err,newDoc){

    res.redirect("/");
  });
});

module.exports = router;
