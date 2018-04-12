var express = require('express');
var query = require('../models/rest');
var router = express.Router();

var jsonPetObject = [{"pet_lookup_id":2,"name":"Katie",
    "breed":"English Spaniel","type":"Springer",
    "location":"Regina,SK","latitude":-32.0301,"longitude":-30.0123}];


//TODO post function test with Postman
router.get('/',function (req,res){

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