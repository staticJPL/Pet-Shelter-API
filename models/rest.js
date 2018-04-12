var db=require('../dbconnection'); // Get Reference of database connection


db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySQL connected");
});

var rest={

    getAllPets:function (callback) {

        var GetAllPetsQuery = "select * from pets";
        return db.query(GetAllPetsQuery,callback);
    },

    getPetsById:function(id,callback){
        var GetPetById = "select * from pets where pet_lookup_id = " + id;
        return db.query(GetPetById, callback);
    },

    addPet:function(petJson,callback) {

        // There probably is a better way to do this but the docs show this as the only way.
        var value = [petJson[0].pet_lookup_id,petJson[0].name,petJson[0].breed,petJson[0].type,petJson[0].location,petJson[0].latitude,petJson[0].longitude];
        var addPetQuery = "insert into pets (pet_lookup_id,name,breed,type,location,latitude,longitude) VALUES (?,?,?,?,?,?,?);";
        return db.query(addPetQuery,value,callback);
    }
};


module.exports = rest;