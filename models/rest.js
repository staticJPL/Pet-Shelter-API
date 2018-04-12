var db=require('../dbconnection'); // Get Reference of database connection


var rest={

    getAllPets:function (callback) {

        var GetAllPetsQuery = "select * from pets";

        return db.query(GetAllPetsQuery,callback);
    },

    getPetsById:function(id,callback){

        var GetPetById = "select * from pets where pet_lookup_id = ";

        return db.query(GetPetById + id, callback)
    },

    //TODO Add Pet code with json object
/*    addPet:function(petjson,callback) {

        var addPed = "Insert INTO pets Values(" + petjson.
        return db.query
    }*/
}


module.exports = rest;