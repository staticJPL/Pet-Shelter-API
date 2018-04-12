var express = require('express');
var query = require('../models/rest');
var router = express.Router();

router.post('/',function (req,res){
    console.log(req.body);
    jsonPetObject = req.body;
    query.addPet(jsonPetObject,function(error,results) {
        if(error){
            res.json({"status": 500, "error": error, "response": null});
        }
        else{
            res.json({"status":200,"error":null,"response": results});
        }
    })
});


module.exports = router;