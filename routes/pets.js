var express = require('express');
var query = require('../models/rest');
var router = express.Router();

/* GET All Pets Returns JSON */
router.get('/', function(req,res) {
  query.getAllPets(function (error,results) {
      if(error){
          res.json({"status": 500, "error": error, "response": null});
      }
      else{
          res.json({"status":200,"error":null,"response": results});
      }
  })
});

/* GET All Pet by Id Returns JSON */
router.get('/:id?',function (req,res) {
  query.getPetsById(req.params.id,function (error,results) {
      if(error){
          res.json({"status": 500, "error": error, "response": null});
      }
      else{
          res.json({"status":200,"error":null,"response": results});
      }
  })

});


module.exports = router;
