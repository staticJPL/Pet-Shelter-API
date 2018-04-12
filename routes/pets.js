var express = require('express');
var query = require('../models/rest');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  query.getAllPets(function (error,results) {
      if(error) throw error;
      res.send(results);
  })
});

module.exports = router;
